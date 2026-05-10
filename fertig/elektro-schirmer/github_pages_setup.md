# GitHub Pages Setup – Elektro-Schirmer

## Schritte

1. Den Ordner `website/` als eigenes GitHub Repository pushen:
   ```bash
   cd fertig/elektro-schirmer/website
   git init
   git add .
   git commit -m "Initial: Elektro-Schirmer Website"
   git remote add origin https://github.com/DEIN-USERNAME/elektro-schirmer.git
   git push -u origin main
   ```

2. In GitHub: **Settings → Pages → Source: Deploy from a branch**
   - Branch: `gh-pages`
   - Folder: `/ (root)`

3. Nach dem ersten Push startet die GitHub Action automatisch und deployed die Website.

4. Die Website ist dann erreichbar unter:
   ```
   https://DEIN-USERNAME.github.io/elektro-schirmer/
   ```

## Wichtig

- Die `vite.config.ts` hat bereits `base: "/elektro-schirmer/"` gesetzt.
- Bilder kommen aus `src/assets/` und werden beim Build automatisch ins `dist/` kopiert.
- Für BrowserRouter (React Router) ist eine `404.html` oder Redirect-Konfiguration nötig.
  Alternativ: HashRouter in App.tsx verwenden für GitHub Pages.

## Bilder ersetzen

Vor dem Deploy bitte die Bilder in `src/assets/` ersetzen:
- `elektro-hero.jpg` → Hochwertiges Hauptbild (1920×1080px)
- `elektro-schirmer-logo.jpg` → Logo in guter Qualität
- Weitere Bilder für Leistungsseiten
