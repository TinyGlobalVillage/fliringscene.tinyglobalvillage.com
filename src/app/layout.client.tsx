// src/app/layout.client.tsx
'use client';

import GlobalStyle from '@/styles/GlobalStyle';
import StyledComponentsRegistry from '@/styles/StyledComponentsRegistry';
import NavBar from './[lang]/_allPageComponents/navigation/NavBar';
import ScrollToPreviousSectionButton from './[lang]/_allPageComponents/buttons/ScrollToPreviousSectionButton';
import Footer from './[lang]/_allPageComponents/footer/Footer';
import styled from 'styled-components';
import Image from 'next/image';

export const Background = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;

`;

type LayoutClientProps = {
  children: React.ReactNode;
  lang: string;
};


export default function LayoutClient({ children, lang }: LayoutClientProps) {
  return (
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
      <NavBar lang={lang} />
      <div lang={lang}>

        <ScrollToPreviousSectionButton />

        <main>{children}</main>
        <Footer lang={lang} />
      </div>
    </StyledComponentsRegistry>
  );
}
