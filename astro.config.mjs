import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hnnmehic.github.io',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'de', locales: { de: 'de-AT', en: 'en' } },
    }),
  ],
  markdown: { syntaxHighlight: false },
  security: {
    // Content-Security-Policy als <meta>-Tag (GitHub Pages erlaubt keine eigenen Header).
    // Astro ergänzt automatisch Hashes für alle eigenen Skripte und Styles.
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self' data:",
        "media-src 'self'",
        "connect-src 'self'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'none'",
        'upgrade-insecure-requests',
      ],
    },
  },
});
