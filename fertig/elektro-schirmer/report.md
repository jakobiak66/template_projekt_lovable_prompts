# Projektbericht: Elektro-Schirmer UG

**Datum:** 2026-05-10  
**URL:** https://www.elektro-schirmer.com/  
**Projektordner:** `fertig/elektro-schirmer/`

---

## Zusammenfassung

Website von Elektro-Schirmer UG (haftungsbeschränkt) vollständig analysiert,
Daten extrahiert und Template befüllt. Das Ergebnis ist eine moderne,
brandingkonforme Website-Vorlage auf Basis des `remix-of-pixel-perfect-clone`
Templates mit allen Kundendaten, der Primärfarbe #fb4105 (Elektro-Orange) und
dem Original-Logo.

**Qualitäts-Score: 78/100**  
Hauptabzüge: kein hochwertiges Hero-Bild verfügbar, keine Kundenbewertungen,
keine Datenschutzerklärung.

---

## Gewähltes Template + Begründung

**Template:** `remix-of-pixel-perfect-clone`  
**Begründung:** Das Template ist für Handwerksbetriebe konzipiert (Heizung/Sanitär)
und hat die gleiche Struktur wie für einen Elektrobetrieb benötigt:
- Mehrseitige React-App mit Unterseiten für Leistungskategorien
- Hero-Sektion, Werte, Leistungen, Kontakt-Infos, Footer
- Sauber mit CSS-Variablen für Farbwechsel
- Fertig adaptierbar für Elektro statt Heizung/Sanitär

Die Leistungsseiten wurden von Heizung/Sanitär/Gas/Service auf
Elektroinstallation/Sicherheitsanlagen/Hausgeräte/E-Auto-Laden umbenannt.

---

## Farben-Übersicht

| Variable | Original (Schwalm) | Elektro-Schirmer |
|----------|-------------------|------------------|
| `--brand` | HSL 187 64% 45% (Teal) | HSL 15 97% 50% (#fb4105, Orange-Rot) |
| `--brand-dark` | HSL 195 30% 30% | HSL 20 80% 22% (Dunkelbraun) |
| `--brand-soft` | HSL 187 50% 92% | HSL 15 80% 94% (Hellrosa) |
| `--section-muted` | HSL 200 30% 97% | HSL 15 15% 97% (Zartorange-Weiß) |
| `--footer` | HSL 195 25% 22% | HSL 20 40% 15% (Dunkelbraun) |

**Primärfarbe:** #fb4105 – gefunden als Titelfarbe im Emotion-Header der Originalwebsite.
Typische Elektro-Signalfarbe (Orange-Rot). Sehr passend für die Branche.

---

## Logo Status

✅ **Logo gefunden und heruntergeladen**  
- Quelle: `https://www.elektro-schirmer.com/s/misc/logo.jpg`
- Größe: 28 KB (JPG)
- Qualität: gut, verwendbar
- Gespeichert als: `images/original/logo.jpg` + `website/src/assets/elektro-schirmer-logo.jpg`

---

## Bilder-Übersicht

| Bild | Status | Pfad |
|------|--------|------|
| Logo | ✅ heruntergeladen | `images/original/logo.jpg` |
| Hero | ⚠️ Thumbnail (3.2 KB) | `images/original/hero.jpg` |
| Betrieb | ✅ heruntergeladen | `images/original/betrieb-1.jpg` |
| Team | ❌ nicht verfügbar (404) | — |
| Leistungen | ❌ nicht verfügbar | — |

**Wichtig:** Das Hero-Bild ist nur ein kleines Thumbnail (3.2 KB) und für eine
moderne Website nicht ausreichend. Der Kunde muss ein hochwertiges Foto liefern.

---

## Kosten

| Posten | Details | Kosten |
|--------|---------|--------|
| Firecrawl | 11 Seiten × $0.001 | $0.011 |
| Anthropic Claude | ~53.000 Tokens | $0.310 |
| **Gesamt** | | **$0.321** |

---

## Was der Kunde noch liefern muss

1. **⚠️ DRINGEND: Hero-Bild** (1920×1080px)
   - Elektriker bei der Arbeit, modernes Büro, oder Berliner Stadtbild
   - Ablegen als: `images/kunde/hero.jpg`

2. **Team-Fotos** (400×400px, 1-3 Mitarbeiter)
   - Ablegen als: `images/kunde/team-1.jpg`, `team-2.jpg`, ...

3. **Leistungsbilder** für jede Kategorie (800×600px):
   - `images/kunde/service-elektro.jpg`
   - `images/kunde/service-reparatur.jpg`
   - `images/kunde/service-sicherheit.jpg`
   - `images/kunde/service-laden.jpg`

4. **Datenschutzerklärung** (DSGVO-konform)
   - Generator: datenschutz-generator.de oder anwalt-beauftragen

5. **Kundenbewertungen** (optional, aber empfohlen)
   - Google-Rating, 3-5 Zitate von Kunden

---

## Nächste Schritte

### Option A: GitHub Pages (Preview)
1. Ordner `website/` als GitHub-Repo pushen
2. GitHub Actions deployed automatisch auf:
   `https://DEIN-USERNAME.github.io/elektro-schirmer/`
3. Details: `github_pages_setup.md`

### Option B: Lovable (Endprodukt)
1. `lovable_prompt.txt` öffnen
2. In Lovable als neues Projekt anlegen (Template importieren)
3. Den gesamten Inhalt von `lovable_prompt.txt` als Prompt eingeben
4. Lovable füllt alle Daten automatisch ein

### Fehlende Bilder ersetzen
- Bilder in `images/kunde/` ablegen (gleiche Dateinamen wie in `image_map.json`)
- Dann `website/src/assets/` aktualisieren
- Neu builden

---

## Qualitätsprüfung

| Prüfpunkt | Status |
|-----------|--------|
| Firma + Slogan | ✅ |
| Vollständige Kontaktdaten | ✅ |
| Leistungen (9 Stück) | ✅ |
| Logo | ✅ |
| Primärfarbe | ✅ (#fb4105) |
| Hero-Bild | ⚠️ (Thumbnail) |
| Team-Fotos | ❌ |
| Leistungsbilder | ❌ |
| Impressum | ✅ (vorhanden) |
| Datenschutz | ❌ (nicht gefunden) |
| Kundenbewertungen | ❌ |
| GitHub Pages Config | ✅ |
| Lovable Prompt | ✅ |
