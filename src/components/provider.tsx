'use client';
import SearchDialog from '@/components/search';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ComponentProps, ReactNode } from 'react';

type I18nProp = ComponentProps<typeof RootProvider>['i18n'];

export function Provider({ i18n, children }: { i18n?: I18nProp; children: ReactNode }) {
  return (
    <RootProvider i18n={i18n} search={{ SearchDialog }}>
      {children}
    </RootProvider>
  );
}
