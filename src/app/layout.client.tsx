// src/app/layout.client.tsx
'use client';

import GlobalStyle from '@/styles/GlobalStyle';
import StyledComponentsRegistry from '@/styles/StyledComponentsRegistry';
import NavBar from './(en)/_allPageComponents/navigation/NavBar';
import ScrollToPreviousSectionButton from './(en)/_allPageComponents/buttons/ScrollToPreviousSectionButton';
import Footer from './(en)/_allPageComponents/footer/Footer';
import styled from 'styled-components';
import Image from 'next/image';

export const Background = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;

`;


export default function LayoutClient({ children }: { children: React.ReactNode }) {
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
      <NavBar />
      <div>

        <ScrollToPreviousSectionButton />

        <main>{children}</main>
        <Footer />
      </div>
    </StyledComponentsRegistry>
  );
}
