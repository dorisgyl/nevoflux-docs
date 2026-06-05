import { defineI18n } from 'fumadocs-core/i18n';

// English (default) + Simplified Chinese, mirroring nevoflux-www.
// Both locales are URL-prefixed (/en, /zh) because static export cannot run
// middleware; the root `/` redirect is handled by scripts/static-root-redirect.mjs.
export const i18n = defineI18n({
  defaultLanguage: 'en',
  languages: ['en', 'zh'],
});
