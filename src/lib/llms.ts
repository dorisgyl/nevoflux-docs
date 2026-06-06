import { source } from '@/lib/source';
import { appName, docsUrl } from '@/lib/shared';

// Builds llms.txt (index) and llms-full.txt (full content) per locale.
// See https://llmstxt.org

type Page = (typeof source)['$inferPage'];

function pageUrl(lang: string, page: Page): string {
  const slug = page.slugs.join('/');
  return `${docsUrl}/${lang}/docs${slug ? `/${slug}` : ''}`;
}

/** A compact index of all doc pages for an LLM to navigate. */
export function llmsIndex(lang: string): string {
  const title = lang === 'zh' ? `${appName} 文档` : `${appName} Docs`;
  const intro =
    lang === 'zh'
      ? 'NevoFlux 是一款 AI 原生浏览器。以下是官方文档的页面索引。'
      : 'NevoFlux is an AI-native browser. This is an index of the official documentation.';

  const heading = lang === 'zh' ? '## 文档' : '## Docs';
  const lines = [`# ${title}`, '', `> ${intro}`, '', heading, ''];
  for (const page of source.getPages(lang)) {
    const desc = page.data.description ? `: ${page.data.description}` : '';
    lines.push(`- [${page.data.title}](${pageUrl(lang, page)})${desc}`);
  }
  return `${lines.join('\n')}\n`;
}

/** The full text of every doc page, concatenated for ingestion. */
export async function llmsFull(lang: string): Promise<string> {
  const parts: string[] = [];
  for (const page of source.getPages(lang)) {
    const md = await page.data.getText('processed');
    parts.push(`# ${page.data.title}\nSource: ${pageUrl(lang, page)}\n\n${md}`);
  }
  return `${parts.join('\n\n---\n\n')}\n`;
}

export const TEXT_HEADERS = { 'Content-Type': 'text/plain; charset=utf-8' };
