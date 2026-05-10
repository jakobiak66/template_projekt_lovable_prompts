# Website Rebuild Automation v2

## Ziel
Alte Kundenwebseiten automatisch auslesen, Daten extrahieren
und daraus zwei Dinge generieren:
1. Einen fertigen Lovable-Prompt zum Befüllen des Templates
2. Eine GitHub Pages ready Website als Kunden-Preview

## Umgebungsvariablen
- FIRECRAWL_API_KEY – bereits in Systemumgebungsvariablen
- ANTHROPIC_API_KEY – bereits in Systemumgebungsvariablen

## Projektstruktur
template_projekt_v2/
├── CLAUDE.md
├── Templates/
│   └── [template-ordner]/
│       └── meta.json
└── fertig/
    └── [projektname]/
        ├── raw_crawl.json
        ├── normalized_data.json
        ├── farben.json
        ├── image_map.json
        ├── cost_report.json
        ├── report.md
        ├── lovable_prompt.txt      ← NEU
        ├── github_pages_setup.md   ← NEU
        ├── images/
        │   ├── original/
        │   └── kunde/
        │       └── README.md
        └── website/
            └── public/
                └── images/

## Projektname automatisch generieren
Leite den Projektordner-Namen aus der URL ab:
- https://www.elektro-schirmer.com/ → elektro-schirmer
- https://www.maler-mueller.de/ → maler-mueller
- Kleinbuchstaben, Bindestriche statt Leerzeichen

## Dein Ablauf bei jeder neuen Kundenwebsite

### Schritt 0 – Templates analysieren
Gehe durch jeden Ordner in /Templates/:
- Lies die Hauptdatei (index.html, App.tsx, main.tsx o.ä.)
- Erkenne Seitenstruktur, Branche, Komponenten, Platzhalter
- Erkenne wo Bilder und Farben definiert sind
- Erstelle /Templates/[name]/meta.json falls nicht vorhanden:
{
  "name": "",
  "beschreibung": "",
  "geeignet_fuer": [],
  "seiten": [],
  "hauptdatei": "",
  "css_variablen_datei": "",
  "platzhalter": [],
  "bild_platzhalter": [],
  "farb_variablen": []
}

### Schritt 1 – Website scrapen mit Firecrawl
Nutze die Firecrawl API:
- Endpoint: https://api.firecrawl.dev/v1/crawl
- Max 20 Unterseiten
- Formate: markdown + html
- Speichere Rohdaten → /fertig/[projektname]/raw_crawl.json

Messe dabei:
- Anzahl gecrawlter Seiten
- Kosten (Firecrawl: $0.001 pro Seite)
- Dauer in Sekunden

### Schritt 2 – Farben extrahieren
Analysiere das gecrawlte HTML/CSS:

Suche nach:
- CSS Variablen (--primary-color, --accent, etc.)
- Häufig verwendete HEX/RGB Werte
- Hintergrundfarben, Textfarben, Button-Farben
- Inline styles
- Tailwind Klassen (bg-blue-600 etc.)

Erstelle /fertig/[projektname]/farben.json:
{
  "primaer": "#hexwert",
  "sekundaer": "#hexwert",
  "akzent": "#hexwert",
  "hintergrund": "#hexwert",
  "text": "#hexwert",
  "text_hell": "#hexwert",
  "button": "#hexwert",
  "button_hover": "#hexwert",
  "alle_gefundenen": []
}

### Schritt 3 – Logo extrahieren
Suche das Logo auf mehreren Wegen:

Weg 1 – HTML Tags:
- <img> mit "logo" im src, alt oder class
- <svg> mit "logo" in id oder class
- <a href="/"> mit Bild darin

Weg 2 – CSS:
- background-image in Header/Nav Elementen
- Suche nach logo.png, logo.svg, logo.jpg in allen URLs

Weg 3 – Direkte URL-Versuche:
- [domain]/logo.png
- [domain]/logo.svg
- [domain]/logo.jpg
- [domain]/images/logo.png
- [domain]/img/logo.png
- [domain]/assets/logo.png
- [domain]/wp-content/uploads/
- [domain]/favicon.ico als Fallback

Lade Logo herunter → /fertig/[projektname]/images/original/logo.png
Falls kein Logo gefunden: in report.md dokumentieren

### Schritt 4 – Bilder herunterladen
Extrahiere ALLE Bild-URLs aus raw_crawl.json:

Suche in:
- Alle <img src="..."> Tags
- CSS background-image: url(...)
- srcset Attribute
- data-src (lazy loading)
- og:image Meta Tags
- Twitter Card Bilder

Lade herunter → /fertig/[projektname]/images/original/
- Benenne sinnvoll: hero.jpg, team-1.jpg, service-1.jpg
- Filtere: alles unter 10kb, Tracking-Pixel, externe Icons
- Logo separat behandeln (Schritt 3)

Erstelle /fertig/[projektname]/image_map.json:
{
  "logo": "images/original/logo.png",
  "hero": "images/original/hero.jpg",
  "team": [],
  "leistungen": [],
  "sonstige": []
}

Erstelle /fertig/[projektname]/images/kunde/README.md:
"Kundenbilder hier ablegen. Gleiche Dateinamen
wie in image_map.json verwenden. Diese ersetzen
die automatisch heruntergeladenen Bilder."

### Schritt 5 – Daten normalisieren
Extrahiere aus den Rohdaten:
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
  "farben": "[Verweis auf farben.json]",
  "kundenstimmen": [],
  "social_media": {},
  "impressum_vorhanden": false,
  "datenschutz_vorhanden": false
}
Speichere → /fertig/[projektname]/normalized_data.json

Fehlende Seiten (Impressum, Datenschutz) aus vorhandenen
Kontaktdaten automatisch generieren.

### Schritt 6 – Template auswählen
- Vergleiche Branche und Struktur mit allen meta.json
- Wähle das beste Template
- Begründe die Wahl

### Schritt 7 – Template befüllen
- Kopiere gewähltes Template → /fertig/[projektname]/website/
- Ersetze alle Text-Platzhalter mit echten Kundendaten
- Ersetze alle Bild-Referenzen mit Pfaden aus image_map.json
- Passe CSS-Variablen und tailwind.config.ts mit farben.json an
- Logo in Header, Footer und Favicon einbauen
- Generiere fehlende Seiten (Impressum, Datenschutz)

### Schritt 8 – GitHub Pages vorbereiten
Erstelle /fertig/[projektname]/website/vite.config.ts
mit korrektem base path für GitHub Pages:

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/[projektname]/',
})

Erstelle /fertig/[projektname]/website/.github/workflows/deploy.yml:

name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist

Speichere Anleitung → /fertig/[projektname]/github_pages_setup.md:
1. Website Ordner als eigenes GitHub Repo pushen
2. Repo Settings → Pages → Source: gh-pages Branch
3. Link wird: https://[username].github.io/[projektname]/

### Schritt 9 – Lovable Prompt generieren
Erstelle /fertig/[projektname]/lovable_prompt.txt

Der Prompt soll alle Kundendaten enthalten und direkt
in Lovable eingefügt werden können:

---
Bitte passe dieses Projekt vollständig für folgenden 
Kunden an. Ersetze ALLE Platzhalter und Beispielinhalte.

UNTERNEHMEN:
- Firma: [firma]
- Slogan: [slogan]
- Beschreibung: [beschreibung]
- Branche: [branche]

KONTAKT:
- Telefon: [telefon]
- Email: [email]
- Adresse: [adresse], [plz] [stadt]
- Öffnungszeiten: [oeffnungszeiten]

LEISTUNGEN:
[leistungen als nummerierte Liste]

TEAM:
[team mitglieder]

FARBEN:
- Primärfarbe: [primaer]
- Sekundärfarbe: [sekundaer]
- Akzentfarbe: [akzent]
- Hintergrund: [hintergrund]
- Buttons: [button]
Bitte passe die gesamte Farbpalette des Projekts
auf diese Farben an.

BILDER:
- Logo liegt in: /public/images/original/logo.png
- Hero Bild: /public/images/original/hero.jpg
- Weitere Bilder in /public/images/original/
Bitte alle Bildpfade entsprechend aktualisieren.

FEHLENDE INHALTE:
[liste was noch fehlt / vom Kunden kommen muss]

IMPRESSUM & DATENSCHUTZ:
[impressum text]
[datenschutz text]

Wichtig: Behalte die bestehende Struktur und 
Komponenten bei, ändere nur die Inhalte und Farben.
---

### Schritt 10 – Cost & Quality Report
Erstelle /fertig/[projektname]/cost_report.json:
{
  "datum": "",
  "projektname": "",
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
    "logo_gefunden": true,
    "gesamt_groesse_mb": 0.00
  },
  "farben": {
    "gefunden": 0,
    "uebertragen": true
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
    "bilder_fehlend": [],
    "farben_uebertragen": []
  }
}

Erstelle /fertig/[projektname]/report.md mit:
- Zusammenfassung
- Gewähltes Template + Begründung
- Farben Übersicht
- Logo Status
- Bilder Übersicht
- Kosten
- Was der Kunde noch liefern muss
- Nächste Schritte (GitHub Pages Link + Lovable)

## Wichtige Hinweise
- Projektordner immer aus Domain ableiten
- Farben VOR Template befüllen extrahieren
- Logo mit allen 3 Wegen suchen
- Bilder: data-src und srcset nicht vergessen
- GitHub Pages Config immer erstellen
- Lovable Prompt immer als letzten Schritt generieren
- Bei Fehlern: weitermachen und dokumentieren
- Kosten immer tracken