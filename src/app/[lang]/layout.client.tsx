// src/app/layout.client.tsx
'use client';

import GlobalStyle from '@/styles/GlobalStyle';
import StyledComponentsRegistry from '@/styles/StyledComponentsRegistry';
import NavBar from './_allPageComponents/navigation/NavBar';
import ScrollToPreviousSectionButton from './_allPageComponents/buttons/ScrollToPreviousSectionButton';
import Footer from './_allPageComponents/footer/Footer';
import styled from 'styled-components';
import Image from 'next/image';
import { Dictionary } from '@/data/i18n/types';

export const Background = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;

`;

type LayoutClientProps = {
  children: React.ReactNode;
  lang: string;
  dict: Dictionary;
};


export default function LayoutClient({ children, lang, dict }: LayoutClientProps) {

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
      <NavBar lang={lang} dict={dict.navigation} />
      <div lang={lang}>

        <ScrollToPreviousSectionButton />

        <main>{children}</main>
        <Footer lang={lang} dict={dict.footer} />
      </div>
    </StyledComponentsRegistry>
  );
}
