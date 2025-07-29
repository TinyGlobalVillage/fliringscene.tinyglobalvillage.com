'use client';

import GlobalStyle from '@/styles/GlobalStyle';
import StyledComponentsRegistry from '@/styles/StyledComponentsRegistry';

import Image from 'next/image';
import NavBar from './(en)/_allPageComponents/navigation/NavBar';
import ScrollToPreviousSectionButton from './(en)/_allPageComponents/buttons/ScrollToPreviousSectionButton';
import Footer from './(en)/_allPageComponents/footer/Footer';
import Script from 'next/script';
import { Background } from '@/styles/layoutStyles';



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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

      </head>
      <body>

        <StyledComponentsRegistry>
          <GlobalStyle />
          <Background>
            <Image
              src="/images/backgrounds/alt-wood-panels.png"
              alt="Background"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </Background>
          <NavBar />
          <div>
              <ScrollToPreviousSectionButton />
            <main>{children}</main>
            <Footer />
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
