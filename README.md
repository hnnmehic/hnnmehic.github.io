# Portfolio – Hanan Mehic

Persönliche Website, live unter **https://hnnmehic.github.io**. Gebaut mit [Astro](https://astro.build), gehostet kostenlos auf GitHub Pages.

## Lokal starten

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # statische Seite nach dist/
```

## Was ändere ich wo?

| Was | Datei |
| --- | --- |
| Name, Mail, LinkedIn/GitHub, Hero-Bild/-Video | `src/site.config.ts` |
| Tech-Stack | `src/site.config.ts` (`stack`) |
| Alle Texte (DE / EN) | `src/i18n/de.json`, `src/i18n/en.json` |
| Farben, Schriften, Abstände | `src/styles/tokens.css` |
| Projekte | eine `.md`-Datei pro Projekt in `src/content/projects/` |
| Bilder | `public/media/`, Projekt-Logos in `public/projects/` |

### Neues Projekt hinzufügen

Neue Datei `src/content/projects/mein-projekt.md`:

```md
---
name: Mein Projekt
order: 3
logo: /projects/mein-projekt.webp   # optional
status: building                     # building | beta | live
url: https://...                     # optional, macht die Karte klickbar
tags: [Swift, AI]
tagline:
  de: Kurzer Untertitel
  en: Short subtitle
description:
  de: Zwei Sätze, was es ist.
  en: Two sentences on what it is.
---
```

### Hero-Video aktivieren

Video als `public/media/hero.mp4` (optional `hero.webm`) ablegen und in `src/site.config.ts` unter `hero.video` eintragen. Ohne Video wird `hero-poster.webp` angezeigt.

## Deploy

Jeder Push auf `main` baut und veröffentlicht die Seite automatisch (`.github/workflows/deploy.yml`).
Einmalig im Repo: *Settings → Pages → Source: GitHub Actions*.

## Als Firmen-Vorlage

Für eine spätere Firmenseite: `site.config.ts` (Name, Links), `tokens.css` (Branding) und die Texte in `src/i18n/` tauschen. Der Aufbau bleibt gleich.
