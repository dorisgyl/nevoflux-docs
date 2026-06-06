import type { Metadata } from 'next';

// No marketing home page: /[lang] redirects to /[lang]/docs. Static export can't
// issue a server redirect, so we do it client-side with a <meta refresh> + script
// fallback. The (home) route group has no layout, so no nav chrome flashes.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function HomeRedirect(props: PageProps<'/[lang]'>) {
  const { lang } = await props.params;
  const target = `/${lang}/docs`;

  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `location.replace(${JSON.stringify(target)} + location.search + location.hash)`,
        }}
      />
      <p style={{ padding: '2rem', textAlign: 'center' }}>
        Redirecting to <a href={target}>{target}</a>…
      </p>
    </>
  );
}
