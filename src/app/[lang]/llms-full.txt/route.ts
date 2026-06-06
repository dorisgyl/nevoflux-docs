import { llmsFull, TEXT_HEADERS } from '@/lib/llms';
import { i18n } from '@/lib/i18n';

// /en/llms-full.txt and /zh/llms-full.txt — per-locale full documentation.
export const revalidate = false;

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}

export async function GET(_req: Request, { params }: RouteContext<'/[lang]/llms-full.txt'>) {
  const { lang } = await params;
  return new Response(await llmsFull(lang), { headers: TEXT_HEADERS });
}
