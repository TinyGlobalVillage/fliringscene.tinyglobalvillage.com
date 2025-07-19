'use client';

import GlobalStyle from '@/styles/GlobalStyles';
import { StyledComponentsRegistry } from '../styles/StyledComponentsRegistry';
import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
