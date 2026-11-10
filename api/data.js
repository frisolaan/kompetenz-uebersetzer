// Serverless-Funktion (Vercel). Daten in Airtable.
// ENV: AIRTABLE_TOKEN, AIRTABLE_BASE_ID, optional AIRTABLE_TABLE_ZUORDNUNGEN, AIRTABLE_TABLE_RUECKMELDUNGEN
// Ohne ENV antwortet die Funktion mit { fallback: true } – das Frontend nutzt dann die Zuordnungen aus daten.js.
const A = "https://api.airtable.com/v0";

const TYP_IN = { "entspricht": "entspricht", "trägt bei": "traegt_bei", "keine Entsprechung": "keine" };
const TYP_OUT = { entspricht: "entspricht", traegt_bei: "trägt bei", keine: "keine Entsprechung" };
const EBENE_IN = { "SBW": "sbw", "BiVo": "bivo" };
const EBENE_OUT = { sbw: "SBW", bivo: "BiVo" };

module.exports = async (req, res) => {
  const token = process.env.AIRTABLE_TOKEN;
  const base = process.env.AIRTABLE_BASE_ID;
  const tZ = process.env.AIRTABLE_TABLE_ZUORDNUNGEN || "Zuordnungen";
  const tR = process.env.AIRTABLE_TABLE_RUECKMELDUNGEN || "Rückmeldungen";

  let op = req.query && req.query.op;
  if (!op) { try { op = new URL(req.url, "http://x").searchParams.get("op"); } catch (_) {} }

  res.setHeader("Cache-Control", "no-store");
  if (!token || !base) return res.status(200).json({ fallback: true });

  const H = { Authorization: `Bearer ${token}` };
  const HJ = { ...H, "Content-Type": "application/json" };
  const urlZ = `${A}/${base}/${encodeURIComponent(tZ)}`;
  const urlR = `${A}/${base}/${encodeURIComponent(tR)}`;

  async function listAll(u) {
    let recs = [], offset;
    do {
      const x = new URL(u);
      x.searchParams.set("pageSize", "100");
      if (offset) x.searchParams.set("offset", offset);
      const r = await fetch(x, { headers: H });
      const d = await r.json();
      if (!r.ok) throw { status: r.status, msg: (d.error && d.error.message) || "Airtable-Fehler" };
      recs = recs.concat(d.records || []);
      offset = d.offset;
    } while (offset);
    return recs;
  }

  const clip = (s, n) => String(s || "").trim().slice(0, n);
  const lines = s => String(s || "").split("\n").map(l => l.trim()).filter(Boolean);
  const urlA = `${A}/${base}/${encodeURIComponent(process.env.AIRTABLE_TABLE_ANGEBOTE || "Angebote")}`;

  try {
    if (op === "zuordnungen") {
      const recs = await listAll(urlZ);
      const out = recs
        .map(r => r.fields)
        .filter(f => f.Badge && f.Ebene && f.Status !== "abgelehnt")
        .map(f => ({
          badge: f.Badge,
          ebene: EBENE_IN[f.Ebene] || f.Ebene,
          ziel: f.Ziel || "",
          typ: TYP_IN[f.Typ] || "traegt_bei",
          status: f.Status || "Entwurf",
          quelle: f.Quelle || "Kuratorium",
          begruendung: f.Begründung || ""
        }));
      return res.status(200).json({ zuordnungen: out });
    }

    if (op === "angebote") {
      const recs = await listAll(urlA);
      const out = recs
        .map(r => ({ id: r.id, ...r.fields }))
        .filter(f => f.Status === "publiziert" && f.Titel)
        .map(f => ({
          id: f.id, titel: f.Titel, anbieter: f.Anbieter || "", ort: f.Ort || "", dauer: f.Dauer || "",
          zyklus: f.Zyklus || [], kosten: f.Kosten || "", kurz: f.Kurzbeschreibung || "",
          siegel: f.Siegel || "gelistet", beispiel: !!f.Beispiel, website: f.Website || "",
          ablauf: lines(f.Ablauf).map(l => l.split("|").map(s => s.trim())),
          badges: lines(f.Badges).map(l => { const [id, ...r] = l.split("|"); return [id.trim(), r.join("|").trim()]; })
        }));
      return res.status(200).json({ angebote: out });
    }

    if (op === "angebot") {
      if (req.method !== "POST") return res.status(405).json({ error: "POST erforderlich" });
      let body = req.body;
      if (typeof body === "string") { try { body = JSON.parse(body); } catch { body = {}; } }
      const b = body || {};
      if (!b.titel || !b.anbieter || !b.kontaktperson) return res.status(400).json({ error: "Titel, Anbieter und Kontaktperson sind erforderlich." });
      const badges = Array.isArray(b.badges) ? b.badges.slice(0, 15) : [];
      const ablauf = Array.isArray(b.ablauf) ? b.ablauf.slice(0, 8) : [];
      const zyk = (Array.isArray(b.zyklus) ? b.zyklus : []).filter(z => ["Zyklus 2", "Zyklus 3"].includes(z));
      const fields = {
        Titel: clip(b.titel, 120), Anbieter: clip(b.anbieter, 160), Ort: clip(b.ort, 120), Dauer: clip(b.dauer, 60),
        Kosten: clip(b.kosten, 80), Kurzbeschreibung: clip(b.kurz, 1200),
        Ablauf: ablauf.map(p => (p || []).slice(0, 3).map(s => clip(s, 160).replace(/\|/g, "/")).join(" | ")).join("\n"),
        Badges: badges.map(x => clip(x[0], 40) + (x[1] ? " | " + clip(x[1], 600).replace(/\n/g, " ") : "")).join("\n"),
        // Selbstdeklaration nur, wenn jedes Badge begründet ist
        Siegel: badges.length && badges.every(x => String(x[1] || "").trim()) ? "deklariert" : "gelistet",
        Status: "eingereicht", Kontaktperson: clip(b.kontaktperson, 120)
      };
      if (zyk.length) fields.Zyklus = zyk;
      if (b.email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(b.email)) fields["Kontakt-E-Mail"] = clip(b.email, 160);
      if (b.website && /^https?:\/\//.test(b.website)) fields.Website = clip(b.website, 300);
      const r = await fetch(urlA, { method: "POST", headers: HJ, body: JSON.stringify({ fields, typecast: true }) });
      const d = await r.json();
      if (!r.ok) return res.status(r.status).json({ error: (d.error && d.error.message) || "Airtable-Fehler" });
      return res.status(200).json({ id: d.id, siegel: fields.Siegel });
    }

    if (op === "rueckmeldungen") {
      const recs = await listAll(urlR);
      // Öffentlich nur offene/angenommene Rückmeldungen, ohne Namen
      const out = recs.map(r => ({ ...r.fields, _t: r.createdTime }))
        .filter(f => f.Status !== "abgelehnt")
        .map(f => ({
          art: f.Art, badge: f.Badge, ebene: EBENE_IN[f.Ebene] || "", ziel: f.Ziel || "",
          typ: TYP_IN[f.Typ] || "", text: f.Text || "", rolle: f.Rolle || "", status: f.Status || "offen", datum: f._t
        }));
      return res.status(200).json({ rueckmeldungen: out });
    }

    if (op === "rueckmeldung") {
      if (req.method !== "POST") return res.status(405).json({ error: "POST erforderlich" });
      let body = req.body;
      if (typeof body === "string") { try { body = JSON.parse(body); } catch { body = {}; } }
      const { art, badge, ebene, ziel, typ, text, name, organisation, rolle } = body || {};
      if (!badge || !text || !name) return res.status(400).json({ error: "Badge, Text und Name sind erforderlich." });
      if (!["Vorschlag", "Kommentar"].includes(art)) return res.status(400).json({ error: "Art ungültig" });
      const fields = {
        Rückmeldung: clip(`${art}: ${badge}${ziel ? " → " + ziel : ""}`, 200),
        Art: art, Badge: clip(badge, 60), Text: clip(text, 3000), Name: clip(name, 120),
        Organisation: clip(organisation, 160), Rolle: clip(rolle, 40) || "andere", Status: "offen"
      };
      if (art === "Vorschlag") {
        if (!ebene || !typ) return res.status(400).json({ error: "Für einen Vorschlag sind Ebene und Typ nötig." });
        fields.Ebene = EBENE_OUT[ebene] || ebene;
        fields.Ziel = clip(ziel, 200);
        fields.Typ = TYP_OUT[typ] || typ;
      }
      const r = await fetch(urlR, { method: "POST", headers: HJ, body: JSON.stringify({ fields, typecast: true }) });
      const d = await r.json();
      if (!r.ok) return res.status(r.status).json({ error: (d.error && d.error.message) || "Airtable-Fehler" });
      return res.status(200).json({ id: d.id });
    }

    return res.status(400).json({ error: "unbekannte op" });
  } catch (e) {
    if (e && e.status) return res.status(e.status).json({ error: e.msg });
    return res.status(500).json({ error: String(e) });
  }
};
