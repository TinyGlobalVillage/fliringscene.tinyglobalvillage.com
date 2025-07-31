// src/app/[lang]/layout.tsx
import Script from 'next/script';
import { ReactNode } from 'react';
import LayoutClient from '../layout.client';
import LangToggle from './_allPageComponents/toggle/LangToggle';

export default function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <head>
        <Script id="org-jsonld" type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Fliring Scene',
            url: 'https://fliringscene.tinyglobalvillage.com',
            logo:
              'https://fliringscene.tinyglobalvillage.com/images/fliring-scene-logo-square.jpg',
          })}
        </Script>
        <link
          rel="preload"
          href="/fonts/JosefinSans-VariableFont_wght.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="image"
          href="/images/placeholder/fliring-scene-placeholder-image.jpg"
        />
        <LangToggle />
      </head>
      <body>
        <LayoutClient lang={params.lang}>{children}</LayoutClient>
      </body>
    </html>
  );
}
