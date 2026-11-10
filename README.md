# Kompetenz-Übersetzer

Prototyp des Future Skills Hub Thurgau: übersetzt zwischen drei Ebenen – **SBW Future Skills** (Haltung, «Warum»), **FSH-Badgeraster Anhang A** (beobachtbares Handeln, «Was») und **Begriffen der Bildungsverordnungen** (Betrieb, «Wozu»).

Statisches Front-End (`index.html`, `daten.js`) plus Serverless-Funktion (`api/data.js`), Zuordnungen und Rückmeldungen in Airtable.

## Steuerung
- **Modell-Ebene** (Bereiche, Badges, SBW-Skills, BiVo-Begriffe, Berufe): `daten.js` – Änderungen via Git.
- **Zuordnungen**: Airtable-Tabelle «Zuordnungen» (Kuratorium pflegt Status «Entwurf» / «beschlossen» / «abgelehnt»).
- **Rückmeldungen** (Vorschläge, Kommentare): Airtable-Tabelle «Rückmeldungen», Eingang über die App.

## ENV (Vercel)
- `AIRTABLE_TOKEN` – Personal Access Token mit `data.records:read` und `data.records:write` auf die Base
- `AIRTABLE_BASE_ID`
- optional `AIRTABLE_TABLE_ZUORDNUNGEN`, `AIRTABLE_TABLE_RUECKMELDUNGEN`

Ohne ENV läuft die App im Demo-Modus mit den Zuordnungen aus `daten.js`.
