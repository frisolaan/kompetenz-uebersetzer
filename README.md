# Kompetenz-Übersetzer

Prototyp des Future Skills Hub Thurgau: übersetzt zwischen drei Ebenen – **SBW Future Skills** (Haltung, «Warum»), **FSH-Badgeraster Anhang A** (beobachtbares Handeln, «Was») und **Begriffen der Bildungsverordnungen** (Betrieb, «Wozu»).

Statisches Front-End (`index.html`, `daten.js`) plus Serverless-Funktion (`api/data.js`), Zuordnungen und Rückmeldungen in Airtable.

## Steuerung
- **Modell-Ebene** (Bereiche, Badges, SBW-Skills, BiVo-Begriffe, Berufe): `daten.js` – Änderungen via Git.
- **Zuordnungen**: Airtable-Tabelle «Zuordnungen» (Kuratorium pflegt Status «Entwurf» / «beschlossen» / «abgelehnt»).
- **Rückmeldungen** (Vorschläge, Kommentare): Airtable-Tabelle «Rückmeldungen», Eingang über die App.
- **Angebote** ausserschulischer Lernorte: Airtable-Tabelle «Angebote». Anbieter reichen über die App ein (Status «eingereicht»); sichtbar erst mit Status «publiziert». Siegel: gelistet → deklariert → geprüft.
- **Quelle** jeder Zuordnung (Kuratorium, Lehrperson, Anbieter, KMU) im Feld «Quelle».

## Rollen (Demo, ohne Login)
Jugendliche · Lehrperson · Lernort-Anbieter · Betrieb/KMU · Kuratorium – jede Rolle mit eigener Startansicht. Die Wahl wird nur im Browser gespeichert.

## ENV (Vercel)
- `AIRTABLE_TOKEN` – Personal Access Token mit `data.records:read` und `data.records:write` auf die Base
- `AIRTABLE_BASE_ID`
- optional `AIRTABLE_TABLE_ZUORDNUNGEN`, `AIRTABLE_TABLE_RUECKMELDUNGEN`, `AIRTABLE_TABLE_ANGEBOTE`

Ohne ENV läuft die App im Demo-Modus mit den Zuordnungen aus `daten.js`.
