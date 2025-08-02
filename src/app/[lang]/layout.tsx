// src/app/[lang]/layout.tsx
import Script from 'next/script';
import { ReactNode } from 'react';
import LayoutClient from '../layout.client';
import { getDictionary } from '@/data/i18n/getDictionary';

interface LangLayoutProps {
  children: ReactNode
  params: { lang: 'en' | 'no' }
}

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {

  const dict = await getDictionary(params.lang);

  return (
    <>
        <LayoutClient lang={params.lang} dict={dict}>{children}</LayoutClient>

    </>
  );
}
