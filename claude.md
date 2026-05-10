# Website Rebuild Automation – Projektübersicht

## Ziel
Alte Kundenwebseiten automatisch auslesen und in moderne 
Lovable-Templates übertragen. Du übernimmst den kompletten 
Prozess von der URL bis zur fertigen Website inkl. Bilder.

## Umgebungsvariablen
- FIRECRAWL_API_KEY – bereits in Systemumgebungsvariablen
- ANTHROPIC_API_KEY – bereits in Systemumgebungsvariablen

## Projektstruktur
template_projekt/
├── CLAUDE.md
├── Templates/
│   ├── handwerker-klon/
│   ├── remix-of-pixel/
│   ├── sight-to-code/
│   └── [weitere Templates]
└── output/
    ├── raw_crawl.json
    ├── normalized_data.json
    ├── cost_report.json
    ├── report.md
    ├── images/
    │   ├── original/     ← Bilder von alter Website
    │   └── kunde/        ← Platzhalter für Kundenbilder
    └── website/
        └── public/
            └── images/   ← Bilder die die Website nutzt

## Dein Ablauf bei jeder neuen Kundenwebsite

### Schritt 0 – Templates analysieren
Gehe durch jeden Ordner in /Templates/:
- Lies die Hauptdatei (index.html, App.tsx, main.tsx o.ä.)
- Erkenne Seitenstruktur, Branche, Komponenten, Platzhalter
- Erkenne auch wo Bilder eingebunden werden (img src, 
  background-image, etc.)
- Erstelle /Templates/[name]/meta.json mit:
{
  "name": "",
  "beschreibung": "",
  "geeignet_fuer": [],
  "seiten": [],
  "hauptdatei": "",
  "platzhalter": [],
  "bild_platzhalter": []
}

### Schritt 1 – Website scrapen mit Firecrawl
Nutze die Firecrawl API:
- Endpoint: https://api.firecrawl.dev/v1/crawl
- Max 20 Unterseiten
- Formate: markdown + html
- Speichere Rohdaten → /output/raw_crawl.json

Messe dabei exakt:
- Anzahl gecrawlter Seiten
- Geschätzte API Kosten (Firecrawl: $0.001 pro Seite)
- Dauer in Sekunden

### Schritt 2 – Bilder herunterladen
Extrahiere alle Bild-URLs aus raw_crawl.json und lade sie herunter:

- Lade ALLE gefundenen Bilder herunter → /output/images/original/
- Benenne sie sinnvoll: hero.jpg, logo.png, team-1.jpg, etc.
- Filtere aus: Icons, Tracking-Pixel, Bilder unter 10kb
- Erstelle /output/images/image_map.json:
{
  "logo": "original/logo.png",
  "hero": "original/hero.jpg",
  "team": ["original/team-1.jpg", "original/team-2.jpg"],
  "leistungen": ["original/service-1.jpg"],
  "sonstige": []
}
- Kopiere alle Bilder auch nach /output/website/public/images/
- Erstelle leere Platzhalter-Ordner /output/images/kunde/ 
  mit einer README.md:
  "Hier Kundenbilder ablegen. Diese ersetzen die originalen 
   Bilder. Gleiche Dateinamen verwenden wie in image_map.json"

### Schritt 3 – Daten normalisieren
Extrahiere aus den Rohdaten folgendes Schema:
{
  "firma": "",
  "slogan": "",
  "beschreibung": "",
  "branche": "",
  "leistungen": [],
  "team": [],
  "kontakt": {
    "email": "",
    "telefon": "",
    "adresse": "",
    "stadt": "",
    "plz": ""
  },
  "oeffnungszeiten": "",
  "bilder": {
    "logo": "",
    "hero": "",
    "team": [],
    "leistungen": []
  },
  "kundenstimmen": [],
  "social_media": {},
  "impressum_vorhanden": false,
  "datenschutz_vorhanden": false
}
Speichere → /output/normalized_data.json

Fehlende Seiten (Impressum, Datenschutz) aus vorhandenen 
Kontaktdaten automatisch generieren.

### Schritt 4 – Template auswählen
- Vergleiche Branche und Struktur mit allen meta.json
- Wähle das beste Template
- Begründe die Wahl

### Schritt 5 – Template befüllen
- Kopiere gewähltes Template → /output/website/
- Ersetze alle Text-Platzhalter mit echten Kundendaten
- Ersetze alle Bild-Platzhalter mit Pfaden aus image_map.json
- Generiere fehlende Seiten automatisch (Impressum, Datenschutz)
- Alle Bilder liegen bereits in /output/website/public/images/

### Schritt 6 – Lovable Export vorbereiten
Erstelle /output/lovable_import.md mit Anleitung:
- Welche Dateien geändert wurden
- Wie das Projekt in Lovable importiert wird
- Welche Bilder der Kunde noch liefern sollte
- Was noch manuell angepasst werden muss

### Schritt 7 – Cost & Quality Report
Erstelle /output/cost_report.json:
{
  "datum": "",
  "url": "",
  "firecrawl": {
    "seiten_gecrawlt": 0,
    "kosten_usd": 0.00,
    "dauer_sekunden": 0
  },
  "bilder": {
    "gefunden": 0,
    "heruntergeladen": 0,
    "gefiltert": 0,
    "gesamt_groesse_mb": 0.00
  },
  "anthropic": {
    "input_tokens": 0,
    "output_tokens": 0,
    "kosten_usd": 0.00
  },
  "gesamt_kosten_usd": 0.00,
  "qualitaet": {
    "score": 0,
    "felder_gefunden": [],
    "felder_fehlend": [],
    "seiten_generiert": [],
    "bilder_fehlend": []
  }
}

Erstelle außerdem /output/report.md mit:
- Zusammenfassung was gemacht wurde
- Gewähltes Template + Begründung
- Bilder-Übersicht (was gefunden, was fehlt noch)
- Kosten-Übersicht
- Was der Kunde noch liefern muss
- Nächste Schritte für Lovable Import

## Wichtige Hinweise
- Immer zuerst Schritt 0 ausführen falls keine meta.json existiert
- Bilder immer vor der Datennormalisierung herunterladen
- Bei Fehlern: weitermachen und im Report dokumentieren
- Kosten immer tracken, auch bei Teilläufen
- Output-Ordner vor jedem Lauf leeren
- Am Ende ist output/website/ eine fertige Website 
  die direkt in Lovable importiert werden kann