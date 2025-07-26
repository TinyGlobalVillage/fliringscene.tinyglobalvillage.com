'use client';

import GlobalStyle from '@/styles/GlobalStyles';
import StyledComponentsRegistry from '@/styles/StyledComponentsRegistry';
import styled from 'styled-components';
import Image from 'next/image';
import NavBar from './(en)/_allPageComponents/navigation/NavBar';
import ScrollToPreviousSectionButton from './(en)/_allPageComponents/buttons/ScrollToPreviousSectionButton';
import Footer from './(en)/_allPageComponents/footer/Footer';

const Background = styled.div`
  position:fixed;
  inset:0;
  z-index:-1;
  pointer-events:none;
  overflow:hidden;
`;

const Foreground = styled.div`


`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
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
          <Foreground>
            <ScrollToPreviousSectionButton />
            <main>{children}</main>
            <Footer/>
          </Foreground>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
