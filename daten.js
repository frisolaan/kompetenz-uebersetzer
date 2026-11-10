// Kompetenz-Übersetzer – Stammdaten (Modell-Ebene).
// Änderungen an Bereichen, Badges, SBW-Skills, BiVo-Begriffen und Berufen erfolgen hier (Git = Protokoll).
// Zuordnungen werden aus Airtable geladen (Tabelle «Zuordnungen»); die Liste ZUORDNUNGEN unten ist der Fallback.
window.DATEN = {

  bereiche: [
    { id: "flow",   name: "FLOW",   untertitel: "Antrieb und Widerstandskraft",   farbe: "#c2772e", bg: "#fbf1e4", sbw: ["passion", "resilience"], lp21: "personale Kompetenzen",  bivo: "Selbstkompetenz" },
    { id: "focus",  name: "FOCUS",  untertitel: "ich, die anderen, die Welt",     farbe: "#2f8f5b", bg: "#eef7f1", sbw: ["global", "sustain"],     lp21: "soziale Kompetenzen",    bivo: "Sozialkompetenz" },
    { id: "impact", name: "IMPACT", untertitel: "Ideen in die Welt bringen",      farbe: "#2f6cae", bg: "#eaf1f9", sbw: ["creative", "entre"],     lp21: "methodische Kompetenzen", bivo: "Methodenkompetenz" },
    { id: "make",   name: "MAKE",   untertitel: "Werkzeuge und Gestaltung",       farbe: "#8a4b8f", bg: "#f4ecf5", sbw: [],                        lp21: "gestalterisch-technisch (Fachbereiche)", bivo: "Fachkompetenz" },
    { id: "meta",   name: "ÜBERGREIFEND", untertitel: "Zusammenspiel mehrerer Bereiche", farbe: "#5f5f5a", bg: "#efeee9", sbw: ["entre"], lp21: "fächerübergreifend", bivo: "alle Dimensionen" }
  ],

  quellen: {
    sbw:  "SBW Future Skills Booklet, SBW Haus des Lernens (sbw.edu). SBW Future Skills™.",
    fsh:  "Future Skills Hub Thurgau, Anhang A: Future-Skills-Badgesystem.",
    bivo: "Verordnungen des SBFI über die berufliche Grundbildung, Art. 4–6 (Auszüge); Bildungspläne: vier Dimensionen einer Handlungskompetenz."
  },

  sbw: [
    { id: "passion",    name: "Leidenschaft",     en: "Passion",               bereich: "FLOW",   ziel: "Eigene Neugier und Leidenschaft entdecken und entfachen, persönliche Ziele verfolgen.", keywords: ["Neugier", "Antriebskraft", "Motivation", "Potenzial", "Talent", "Flow"] },
    { id: "resilience", name: "Widerstandskraft", en: "Resilience",            bereich: "FLOW",   ziel: "Innere Widerstandskraft stärken und kreativ mit Veränderungen umgehen.", keywords: ["Resilienzfaktoren", "Salutogenese", "Lebenskompetenzen", "Lösungsorientierung"] },
    { id: "global",     name: "Weltoffenheit",    en: "Global Identity",       bereich: "FOCUS",  ziel: "Eigene Identität schrittweise erweitern, sich als Teil der Gesellschaft verstehen und Verantwortung übernehmen.", keywords: ["Respekt", "Empathie", "Diversität", "Open-Mindedness", "Vorurteile"] },
    { id: "sustain",    name: "Nachhaltigkeit",   en: "Sustainability",        bereich: "FOCUS",  ziel: "Bewusstsein für biologische, technische und soziale Kreisläufe schärfen.", keywords: ["Agenda 2030", "Handabdruck", "Kreislaufdenken", "Cradle-to-Cradle"] },
    { id: "creative",   name: "Kreativität",      en: "Acting outside the box", bereich: "IMPACT", ziel: "Denk- und Handlungsmuster hinterfragen, ungewöhnliche Lösungen finden und erproben.", keywords: ["laterales Denken", "Rulebreaking", "Design Thinking"] },
    { id: "entre",      name: "Unternehmergeist", en: "Entrepreneurship",      bereich: "IMPACT", ziel: "Unternehmerisches Denken und Handeln fördern, Ideen und Projekte umsetzen; integriert die anderen Skills.", keywords: ["Service Learning", "Gemeinsinn", "Innovation", "Risiko", "Verantwortung", "Eigeninitiative"] }
  ],

  badges: [
    { id: "neugier", bereich: "flow", titel: "Neugier entdecken und verfolgen", herkunft: "neu", status: "Entwurf",
      du: "Du bist einer Frage nachgegangen, die dich wirklich interessiert, und bist drangeblieben, weil du es wissen wolltest.",
      z2: ["zeigt Interesse an einer Sache", "stellt eigene Fragen", "bringt eigene Interessen ein"],
      z3: ["verfolgt eine selbst gewählte Frage", "setzt sich eigene Ziele", "vertieft ein Thema über die Aufgabe hinaus"] },
    { id: "durchhalten", bereich: "flow", titel: "Durchhalten und aus Fehlern lernen", herkunft: "FSH Anhang A", status: "beschlossen",
      du: "Du bist drangeblieben, auch als es nicht sofort geklappt hat. Aus Fehlern hast du gelernt und es nochmal versucht.",
      z2: ["bleibt bei einer Aufgabe dran", "erkennt Fehler und versucht es erneut", "gibt bei Schwierigkeiten nicht sofort auf"],
      z3: ["nutzt Fehler gezielt zur Verbesserung", "bleibt auch bei längeren Aufgaben dran", "reflektiert, was beim nächsten Mal besser geht"] },
    { id: "selbsteinschaetzen", bereich: "flow", titel: "Sich selbst einschätzen", herkunft: "FSH Anhang A", status: "beschlossen",
      du: "Du weisst, was du gut kannst und wo du noch dazulernen willst. Du schätzt dein eigenes Tun ehrlich ein.",
      z2: ["benennt eigene Stärken", "erkennt, was noch schwerfällt", "nimmt Rückmeldungen an"],
      z3: ["schätzt die eigene Leistung realistisch ein", "leitet daraus nächste Lernschritte ab", "begründet die Einschätzung"] },

    { id: "team", bereich: "focus", titel: "Im Team zusammenarbeiten", herkunft: "FSH Anhang A", status: "beschlossen",
      du: "Du hast mit anderen zusammen etwas auf die Beine gestellt, eine Rolle übernommen und zum gemeinsamen Ergebnis beigetragen.",
      z2: ["arbeitet in der Gruppe mit", "teilt Aufgaben auf", "hört anderen zu"],
      z3: ["übernimmt eine Rolle im Team", "stimmt sich strukturiert ab", "trägt aktiv zur gemeinsamen Lösung bei"] },
    { id: "einfuehlen", bereich: "focus", titel: "Andere verstehen und sich einfühlen", herkunft: "FSH Anhang A", status: "beschlossen",
      du: "Du hast dich in andere hineinversetzt und ihre Sicht ernst genommen. So entstehen bessere Lösungen für alle.",
      z2: ["nimmt die Sicht anderer wahr", "geht respektvoll mit unterschiedlichen Meinungen um"],
      z3: ["versetzt sich bewusst in andere", "berücksichtigt deren Bedürfnisse in der Lösung", "vermittelt bei Unstimmigkeiten"] },
    { id: "verantwortung", bereich: "focus", titel: "Verantwortung übernehmen", herkunft: "FSH Anhang A", status: "beschlossen",
      du: "Du hast eine Aufgabe übernommen und zuverlässig zu Ende gebracht. Auf dich war Verlass.",
      z2: ["übernimmt eine Aufgabe und führt sie aus", "hält Abmachungen ein", "geht sorgfältig mit Material um"],
      z3: ["übernimmt Verantwortung für einen Teilbereich", "steht für Ergebnisse ein", "denkt an die Folgen des eigenen Handelns"] },
    { id: "nachhaltig", bereich: "focus", titel: "Nachhaltig denken und handeln", herkunft: "neu", status: "Entwurf",
      du: "Du hast überlegt, woher dein Material kommt und was danach damit passiert, und hast entsprechend gehandelt.",
      z2: ["geht sparsam mit Material um", "verwertet Reste weiter", "fragt, was mit dem Produkt danach passiert"],
      z3: ["bezieht Material- und Energiekreisläufe in Entscheide ein", "wägt Folgen für Mensch und Umwelt ab", "begründet nachhaltige Gestaltungsentscheide"] },

    { id: "forschen", bereich: "impact", titel: "Forschen und ausprobieren", herkunft: "FSH Anhang A", status: "beschlossen",
      du: "Du hast Fragen gestellt, ausprobiert und beobachtet. So bist du dem Problem auf den Grund gegangen.",
      z2: ["stellt Fragen", "probiert verschiedene Wege aus", "beobachtet, was passiert"],
      z3: ["geht systematisch vor", "testet gezielt Annahmen", "zieht Schlüsse aus den Ergebnissen"] },
    { id: "ideen", bereich: "impact", titel: "Ideen entwickeln", herkunft: "FSH Anhang A", status: "beschlossen",
      du: "Du hast neue Ideen gefunden und weitergesponnen, statt bei der ersten Lösung stehenzubleiben.",
      z2: ["entwickelt eigene Ideen", "sammelt mehrere Möglichkeiten", "skizziert erste Lösungen"],
      z3: ["generiert Ideen systematisch", "kombiniert und vergleicht Varianten", "begründet die Auswahl"] },
    { id: "planen", bereich: "impact", titel: "Vorgehen planen und anpassen", herkunft: "FSH Anhang A", status: "beschlossen",
      du: "Du hast dein Vorgehen geplant und unterwegs angepasst, als es nötig war. So bist du zum Ziel gekommen.",
      z2: ["plant einfache Schritte", "hält eine Reihenfolge ein", "passt bei Problemen an"],
      z3: ["plant vorausschauend", "priorisiert und ändert das Vorgehen begründet", "behält das Ziel im Blick"] },
    { id: "praesentieren", bereich: "impact", titel: "Die eigene Idee präsentieren", herkunft: "FSH Anhang A", status: "beschlossen",
      du: "Du hast deine Idee vor anderen gezeigt und verständlich erklärt. Du konntest überzeugen, warum sie funktioniert.",
      z2: ["stellt die eigene Arbeit vor", "erklärt sie verständlich", "zeigt das Wichtigste"],
      z3: ["präsentiert strukturiert vor Publikum", "begründet die eigene Idee", "geht auf Rückfragen ein"] },

    { id: "prototypen", bereich: "make", titel: "Prototypen bauen und gestalten", herkunft: "FSH Anhang A", status: "beschlossen",
      du: "Du hast aus deiner Idee etwas Echtes gemacht, gebaut, ausprobiert und verbessert. Was ein Gedanke war, ist jetzt Realität.",
      z2: ["baut einfache Prototypen", "probiert aus und passt an", "trifft erste Gestaltungsentscheide"],
      z3: ["entwickelt funktionale Prototypen", "verbessert gezielt in mehreren Durchläufen", "begründet die Designentscheide"] },
    { id: "digital", bereich: "make", titel: "Digitale Werkzeuge anwenden", herkunft: "FSH Anhang A", status: "beschlossen",
      du: "Du hast digitale Werkzeuge genutzt, um etwas zu gestalten oder zu lösen. Die Technik war dein Werkzeug, nicht dein Hindernis.",
      z2: ["nutzt grundlegende digitale Werkzeuge", "erstellt einfache digitale Produkte"],
      z3: ["wählt passende Werkzeuge gezielt aus", "setzt sie problemorientiert ein", "baut Produkte iterativ aus"] },
    { id: "zerlegen", bereich: "make", titel: "Probleme in Schritte zerlegen", herkunft: "FSH Anhang A", status: "beschlossen",
      du: "Du hast ein grosses Problem in machbare Schritte zerlegt und der Reihe nach gelöst. Genau so arbeiten Profis.",
      z2: ["zerlegt eine Aufgabe in Teilschritte", "erkennt einfache Muster", "folgt einer Abfolge"],
      z3: ["gliedert komplexe Probleme systematisch", "erkennt Muster und Wiederholungen", "entwickelt eigene Abläufe (algorithmisches Denken)"] },

    { id: "unternehmergeist", bereich: "meta", titel: "Unternehmergeist", herkunft: "neu", status: "Entwurf", meta: true,
      du: "Du hast eine Idee über längere Zeit selbst vorangetrieben, vom Einfall bis zur Umsetzung für andere.",
      regel: "Im selben Projekt mindestens drei Badges aus mindestens drei Bereichen, darunter «Verantwortung übernehmen» oder «Die eigene Idee präsentieren».",
      z2: [], z3: [] }
  ],

  // BiVo-Begriffe (Vokabular). dimension: Methodenkompetenz | Sozial- und Selbstkompetenz | Fachkompetenz
  begriffe: [
    { b: "Arbeitstechniken und Problemlösen", d: "Methodenkompetenz" },
    { b: "prozessorientiertes, vernetztes Denken und Handeln", d: "Methodenkompetenz" },
    { b: "Lernstrategien", d: "Methodenkompetenz" },
    { b: "Informations- und Kommunikationsstrategien", d: "Methodenkompetenz" },
    { b: "Präsentationstechniken", d: "Methodenkompetenz" },
    { b: "Präsentations- und Dokumentationstechniken", d: "Methodenkompetenz" },
    { b: "Informations- und Kommunikationstechnologien", d: "Methodenkompetenz" },
    { b: "Informationsmanagement", d: "Methodenkompetenz" },
    { b: "Problemlösefähigkeit", d: "Methodenkompetenz" },
    { b: "ökologisches Verhalten", d: "Methodenkompetenz" },
    { b: "eigenverantwortliches Handeln", d: "Sozial- und Selbstkompetenz" },
    { b: "lebenslanges Lernen", d: "Sozial- und Selbstkompetenz" },
    { b: "Kommunikationsfähigkeit", d: "Sozial- und Selbstkompetenz" },
    { b: "Teamfähigkeit", d: "Sozial- und Selbstkompetenz" },
    { b: "Konfliktfähigkeit", d: "Sozial- und Selbstkompetenz" },
    { b: "Umgangsformen", d: "Sozial- und Selbstkompetenz" },
    { b: "Fachkompetenz (berufsspezifisch)", d: "Fachkompetenz" }
  ],

  berufe: [
    { id: "allgemein", name: "Allgemein (vier Dimensionen)", erlass: "Bildungspläne SBFI", stand: "", alle: true,
      hinweis: "Zeigt alle hinterlegten Begriffe, gruppiert nach Dimension." },
    { id: "hotellerie", name: "Hotellerieangestellte/r", erlass: "Verordnung SBFI 412.101.220.05", stand: "Stand 2018 – Aktualität prüfen",
      begriffe: ["Arbeitstechniken und Problemlösen", "prozessorientiertes, vernetztes Denken und Handeln", "Lernstrategien", "Informations- und Kommunikationsstrategien", "Präsentationstechniken", "eigenverantwortliches Handeln", "lebenslanges Lernen", "Kommunikationsfähigkeit", "Teamfähigkeit", "Umgangsformen"] },
    { id: "zeichner", name: "Zeichner/in EFZ, Raum- und Bauplanung", erlass: "Verordnung SBFI 412.101.221.15", stand: "",
      begriffe: ["Informations- und Kommunikationstechnologien", "Präsentations- und Dokumentationstechniken", "ökologisches Verhalten", "Fachkompetenz (berufsspezifisch)"] },
    { id: "metallbau", name: "Metallbaupraktiker/in EBA", erlass: "Verordnung SBFI 412.101.220.43", stand: "",
      begriffe: ["eigenverantwortliches Handeln", "lebenslanges Lernen", "Kommunikationsfähigkeit", "Konfliktfähigkeit", "Fachkompetenz (berufsspezifisch)"] },
    { id: "gtp", name: "Gebäudetechnikplanung EFZ (Berufsfeld)", erlass: "Verordnung SBFI 412.101.221.21", stand: "",
      begriffe: ["Informationsmanagement", "Lernstrategien", "Problemlösefähigkeit", "ökologisches Verhalten", "Fachkompetenz (berufsspezifisch)"] }
  ],

  // Siegelstufen für Angebote ausserschulischer Lernorte
  siegel: {
    "gelistet":   "Angebot ist erfasst. Die Zuordnung zu Badges ist noch nicht begründet.",
    "deklariert": "Der Anbieter hat die angesprochenen Badges mit Indikatoren begründet (Selbstdeklaration).",
    "geprüft":    "Das Kuratorium hat die Begründungen anhand der Indikatoren geprüft und bestätigt."
  },

  // Fallback-Angebote: frei erfundene BEISPIELE zur Demonstration (keine realen Anbieter).
  angebote: [
    { id: "bsp-solarboot", beispiel: true, titel: "Solarboot-Werkstatt", anbieter: "Beispiel-Lernort «Werkstatt am See»", ort: "Thurgau (Beispiel)",
      dauer: "1 Tag", zyklus: ["Zyklus 2", "Zyklus 3"], kosten: "CHF 20 pro Kind (Beispiel)", siegel: "geprüft",
      kurz: "Teams bauen ein kleines Solarboot, testen es im Wasserbecken und verbessern es in mehreren Runden.",
      ablauf: [
        ["08:30–10:00", "Einstieg & Forschungsfrage", "Jedes Team formuliert, was sein Boot können soll"],
        ["10:00–12:00", "Bauen & erster Test", "Ein schwimmender erster Prototyp"],
        ["13:00–15:00", "Verbessern in Runden", "Mindestens zwei dokumentierte Verbesserungen"],
        ["15:00–16:00", "Regatta & Präsentation", "Jedes Team erklärt seine wichtigste Designentscheidung"]
      ],
      badges: [
        ["prototypen", "Teams verbessern gezielt in mehreren Durchläufen und begründen Designentscheide (Z3)."],
        ["forschen", "Annahmen zu Rumpfform und Gewicht werden im Becken getestet (Z3: testet gezielt Annahmen)."],
        ["team", "Feste Rollen im Team: Bau, Elektrik, Dokumentation."],
        ["durchhalten", "Kentern und Neuanfang gehören zum Ablauf; Fehler werden zur Verbesserung genutzt."],
        ["praesentieren", "Abschlusspräsentation mit Begründung und Rückfragen."]
      ] },
    { id: "bsp-roboter", beispiel: true, titel: "Roboter-Parcours", anbieter: "Beispiel-Lernort «Digitallabor»", ort: "Thurgau (Beispiel)",
      dauer: "Halber Tag", zyklus: ["Zyklus 2"], kosten: "kostenlos (Beispiel)", siegel: "deklariert",
      kurz: "Kinder programmieren kleine Roboter so, dass sie einen Parcours selbstständig bewältigen.",
      ablauf: [
        ["13:30–14:15", "Roboter kennenlernen", "Erste Befehle ausprobiert"],
        ["14:15–15:30", "Parcours in Teilstücke zerlegen", "Ablauf für jedes Teilstück geplant und getestet"],
        ["15:30–16:30", "Gesamtlauf & Fehlersuche", "Parcours vollständig gefahren"]
      ],
      badges: [
        ["zerlegen", "Der Parcours wird in Teilschritte zerlegt und der Reihe nach gelöst (Z2)."],
        ["digital", "Kinder nutzen eine einfache Programmierumgebung (Z2: nutzt grundlegende digitale Werkzeuge)."],
        ["durchhalten", "Fehlersuche bis zum erfolgreichen Gesamtlauf."]
      ] },
    { id: "bsp-flickwerk", beispiel: true, titel: "Reparieren statt wegwerfen", anbieter: "Beispiel-Verein «Flickwerk»", ort: "Thurgau (Beispiel)",
      dauer: "3 Nachmittage", zyklus: ["Zyklus 3"], kosten: "CHF 10 Materialbeitrag (Beispiel)", siegel: "gelistet",
      kurz: "Jugendliche reparieren mit Freiwilligen Alltagsgegenstände von Besucherinnen und Besuchern eines Reparaturtreffs.",
      ablauf: [
        ["Tag 1", "Fehler finden", "Diagnose für zwei Gegenstände"],
        ["Tag 2", "Reparieren mit Kundschaft", "Mindestens eine Reparatur abgeschlossen"],
        ["Tag 3", "Rückblick & Kurzpräsentation", "Plakat: Was wurde gerettet?"]
      ],
      badges: [
        ["nachhaltig", ""], ["verantwortung", ""], ["einfuehlen", ""]
      ] }
  ],

  // Fallback-Zuordnungen (Erstvorschlag). Typ: entspricht | traegt_bei | keine
  zuordnungen: [
    ["neugier", "sbw", "passion", "entspricht"], ["neugier", "bivo", "lebenslanges Lernen", "traegt_bei"],
    ["durchhalten", "sbw", "resilience", "entspricht"], ["durchhalten", "bivo", "Lernstrategien", "traegt_bei"],
    ["selbsteinschaetzen", "sbw", "resilience", "traegt_bei"], ["selbsteinschaetzen", "bivo", "lebenslanges Lernen", "traegt_bei"],
    ["team", "sbw", "global", "traegt_bei"], ["team", "bivo", "Teamfähigkeit", "entspricht"],
    ["einfuehlen", "sbw", "global", "entspricht"], ["einfuehlen", "bivo", "Konfliktfähigkeit", "traegt_bei"], ["einfuehlen", "bivo", "Umgangsformen", "traegt_bei"],
    ["verantwortung", "sbw", "global", "traegt_bei"], ["verantwortung", "sbw", "entre", "traegt_bei"], ["verantwortung", "bivo", "eigenverantwortliches Handeln", "entspricht"],
    ["nachhaltig", "sbw", "sustain", "entspricht"], ["nachhaltig", "bivo", "ökologisches Verhalten", "entspricht"],
    ["forschen", "sbw", "passion", "traegt_bei"], ["forschen", "bivo", "Arbeitstechniken und Problemlösen", "traegt_bei"],
    ["ideen", "sbw", "creative", "entspricht"], ["ideen", "bivo", "Problemlösefähigkeit", "traegt_bei"],
    ["planen", "sbw", "entre", "traegt_bei"], ["planen", "bivo", "prozessorientiertes, vernetztes Denken und Handeln", "entspricht"],
    ["praesentieren", "sbw", "entre", "traegt_bei"], ["praesentieren", "bivo", "Präsentationstechniken", "entspricht"], ["praesentieren", "bivo", "Kommunikationsfähigkeit", "traegt_bei"],
    ["prototypen", "sbw", "creative", "traegt_bei"], ["prototypen", "bivo", "Fachkompetenz (berufsspezifisch)", "traegt_bei"],
    ["digital", "sbw", "", "keine"], ["digital", "bivo", "Informations- und Kommunikationstechnologien", "entspricht"],
    ["zerlegen", "sbw", "", "keine"], ["zerlegen", "bivo", "Arbeitstechniken und Problemlösen", "entspricht"],
    ["unternehmergeist", "sbw", "entre", "entspricht"], ["unternehmergeist", "bivo", "eigenverantwortliches Handeln", "traegt_bei"]
  ].map(([badge, ebene, ziel, typ]) => ({ badge, ebene, ziel, typ, status: "Entwurf", quelle: "Kuratorium", begruendung: "Erstvorschlag, durch Kuratorium zu prüfen." }))
};
