import Link from 'next/link';
import { Logo } from '@/components/logo';
import { tagline } from '@/lib/shared';

const copy = {
  en: {
    badge: 'Documentation',
    title: 'NevoFlux Docs',
    subtitle: tagline,
    blurb:
      'Guides, references, and everything you need to get the most out of the AI-native browser.',
    getStarted: 'Get started',
    browse: 'Browse all docs',
  },
  zh: {
    badge: '文档',
    title: 'NevoFlux 文档',
    subtitle: '别只是浏览，去指挥。',
    blurb: '指南、参考以及充分发挥这款 AI 原生浏览器所需的一切。',
    getStarted: '快速开始',
    browse: '浏览全部文档',
  },
} as const;

export default async function HomePage(props: PageProps<'/[lang]'>) {
  const { lang } = await props.params;
  const t = lang === 'zh' ? copy.zh : copy.en;

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <Logo className="size-16 text-fd-primary" />

      <span className="mt-8 rounded-full border border-fd-primary/30 px-3 py-1 text-xs font-medium uppercase tracking-wide text-fd-primary">
        {t.badge}
      </span>

      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{t.title}</h1>
      <p className="mt-3 text-lg font-medium text-fd-primary">{t.subtitle}</p>
      <p className="mt-4 max-w-xl text-fd-muted-foreground">{t.blurb}</p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href={`/${lang}/docs`}
          className="rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-semibold text-fd-primary-foreground transition-opacity hover:opacity-90"
        >
          {t.getStarted}
        </Link>
        <Link
          href={`/${lang}/docs`}
          className="rounded-lg border border-fd-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-fd-accent"
        >
          {t.browse}
        </Link>
      </div>
    </main>
  );
}
