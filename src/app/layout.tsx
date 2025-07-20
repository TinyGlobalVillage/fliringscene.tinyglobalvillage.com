'use client';

import GlobalStyle from '@/styles/GlobalStyles';
import { StyledComponentsRegistry } from '../styles/StyledComponentsRegistry';
import { styled } from 'styled-components';
import Image from 'next/image';
import React from 'react';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

const Background = styled.div`
  position: fixed;       // pin the background in place
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

const Foreground = styled.main`
  position: relative;
  z-index: 1;
`;


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <Wrapper>
            <Background>
                <Image
                  src="/images/backgrounds/alt-wood-panels.png"
                  alt="Background"
                  fill
                  priority
                  style={{ objectFit: 'cover' }}
                />
            </Background>
            <Foreground>
              {children}
            </Foreground>
          </Wrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
