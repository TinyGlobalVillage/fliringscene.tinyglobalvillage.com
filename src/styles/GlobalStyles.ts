'use client';
// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

"sqs"

nav.NavBar {
}

@media (min-width: 767px){ // desktop or tablet
color: red;
background-color: blue;
font-size: .5rem;
}


}

html {
  width: 100%;
  overflow-x: hidden;
}

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
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
