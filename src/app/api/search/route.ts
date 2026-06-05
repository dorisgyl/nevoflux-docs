import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
import { createTokenizer } from '@orama/tokenizers/mandarin';

export const revalidate = false;

// `staticGET` exports a build-time search index (required for `output: 'export'`).
// The client (src/components/search.tsx) queries it in the browser.
export const { staticGET: GET } = createFromSource(source, {
  localeMap: {
    en: { language: 'english' },
    zh: {
      components: {
        tokenizer: createTokenizer(),
      },
      search: {
        threshold: 0,
        tolerance: 0,
      },
    },
  },
});
