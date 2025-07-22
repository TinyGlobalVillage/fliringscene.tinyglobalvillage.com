'use client';

import GlobalStyle from '@/styles/GlobalStyles';
import StyledComponentsRegistry from '@/styles/StyledComponentsRegistry';
import styled from 'styled-components';
import Image from 'next/image';
import NavBar from './(en)/(public)/_allPageComponents/NavBar';
import BackToTop from './(en)/(public)/_allPageComponents/buttons/BackToTop';

const Background = styled.div`
  position:fixed;
  inset:0;
  z-index:-1;
  pointer-events:none;
  overflow:hidden;
`;

const Foreground = styled.div`
  /* optional page-wide paddings etc. */
  min-height:100vh;
  padding-top: 100px;
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
            <BackToTop/>
            <main>{children}</main>
          </Foreground>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
