'use client'
// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Josefin Sans';
    src: url('/fonts/JosefinSans-VariableFont_wght.ttf') format('truetype');
    font-weight: 100 700;
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: 'Josefin Sans', sans-serif;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
