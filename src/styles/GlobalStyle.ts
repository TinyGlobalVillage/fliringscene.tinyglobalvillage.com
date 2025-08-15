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
     scrollbar-color: #f7b700 rgba(0,0,0,0.1);
     scrollbar-width: thin;
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

/* ----------------------------------
   CUSTOM SCROLLBAR (WebKit/Blink)
---------------------------------- */
::-webkit-scrollbar {
  width: 10px;   /* vertical */
  height: 8px;   /* horizontal */
}

::-webkit-scrollbar-track {
  background: rgba(0,0,0,0.1);
}

::-webkit-scrollbar-thumb {
  background-color: #f7b700;
  border-radius: 6px;
  /* Make the thumb look “thicker” without widening the track */
  border: 4px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #ffcc33; /* or a slightly lighter yellow */
}
`;

export default GlobalStyle;
