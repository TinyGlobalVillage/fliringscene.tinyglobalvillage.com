// src/styles/GlobalStyles.ts
'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* -----------------------------------------
     Reset & Box Sizing
  ----------------------------------------- */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* -----------------------------------------
     Base HTML & Body
  ----------------------------------------- */
  html, body, #__next {
    width: 100%;
    overflow-x: hidden;
    font-family: 'Josefin Sans', sans-serif;
  }

  /* -----------------------------------------
     Custom Font
  ----------------------------------------- */
  @font-face {
    font-family: 'Josefin Sans';
    src: url('/fonts/JosefinSans-VariableFont_wght.ttf') format('truetype');
    font-weight: 100 700;
    font-style: normal;
    font-display: swap;
  }

  /* -----------------------------------------
     Links & Buttons
  ----------------------------------------- */
  a {
    color: inherit;
    text-decoration: none;
  }

  a, button {
    cursor: pointer;
    background: none;
    border: none;
    font: inherit;
  }

  /* -----------------------------------------
     Example Media Query
     (scope to your .NavBar or other selector)
  ----------------------------------------- */
  /*
  @media (min-width: 767px) {
    .NavBar {
      color: red;
      background-color: blue;
      font-size: 0.5rem;
    }
  }
  */
`;

export default GlobalStyle;
