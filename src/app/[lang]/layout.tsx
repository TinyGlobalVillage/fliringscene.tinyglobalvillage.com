// src/app/[lang]/layout.tsx
import Script from 'next/script';
import { ReactNode } from 'react';
import LayoutClient from '../layout.client';
import LangToggle from './_allPageComponents/toggle/LangToggle';
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
        {/* <link
          rel="preload"
          as="image"
          href="/images/placeholder/fliring-scene-placeholder-image.jpg"
        /> */}
      </head>
      <body>
        <LangToggle dict={dict.navigation.langToggle} />
        <LayoutClient lang={params.lang} dict={dict}>{children}</LayoutClient>
      </body>
    </html>
  );
}
