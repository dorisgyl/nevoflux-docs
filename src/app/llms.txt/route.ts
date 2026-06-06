import { llmsIndex, TEXT_HEADERS } from '@/lib/llms';

// /llms.txt — English index (the canonical llms.txt location).
export const revalidate = false;

export function GET() {
  return new Response(llmsIndex('en'), { headers: TEXT_HEADERS });
}
