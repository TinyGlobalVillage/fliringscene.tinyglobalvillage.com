// src/app/[lang]/layout.tsx
import Script from 'next/script';
import { ReactNode } from 'react';
import LayoutClient from './layout.client';
import { getDictionary } from '@/data/i18n/getDictionary';

interface LangLayoutProps {
  children: ReactNode;
  // tell TS that params really is a promise
  params: Promise<{ lang: string }>;
}

export default async function RootLayout({
  children,
  params,
}: LangLayoutProps) {
  // await the params object before you read `.lang`
  const { lang } = await params;

  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <head>
        <Script id="org-jsonld" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Fliring Scene',
            url: 'https://fliringscene.tinyglobalvillage.com',
            logo: 'https://…/logo-square.jpg',
          })}
        </Script>
        <link
          rel="preload"
          href="/fonts/JosefinSans-VariableFont_wght.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        {/* <link
          rel="preload"
          as="image"
          href="/images/placeholder/fliring-scene-placeholder-image.jpg"
        /> */}
      </head>
      <body>
        <LayoutClient lang={lang} dict={dict}>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
