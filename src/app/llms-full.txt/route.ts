import { llmsFull, TEXT_HEADERS } from '@/lib/llms';

// /llms-full.txt — full English documentation, concatenated.
export const revalidate = false;

export async function GET() {
  return new Response(await llmsFull('en'), { headers: TEXT_HEADERS });
}
