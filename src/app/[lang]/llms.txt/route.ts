import { llmsIndex, TEXT_HEADERS } from '@/lib/llms';
import { i18n } from '@/lib/i18n';

// /en/llms.txt and /zh/llms.txt — per-locale index.
export const revalidate = false;

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}

export async function GET(_req: Request, { params }: RouteContext<'/[lang]/llms.txt'>) {
  const { lang } = await params;
  return new Response(llmsIndex(lang), { headers: TEXT_HEADERS });
}
