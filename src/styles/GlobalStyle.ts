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

`;

export default GlobalStyle;
