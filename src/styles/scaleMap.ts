// scaleMap.ts
export const scaleMap = {
  '6.5rem': {
    fontSize: '6.5rem',
    NeonTitleFontSize: '6.5rem',
    NeonSectionTitleFontSize: '6.5rem',
    NeonTextFontSize: '6.5rem',
    viewBoxHeight: 105,
    NeonTitleViewBoxHeight: 105,
    svgViewBoxHeight: 90,
    boxWidth: '220px',
    bulbSize: '15px',
    comedyClubBulbSize: '15px',
    microphoneWidth: '30px',
    faceWidth: '100px',
    arrowWidth: '200px',
    arrowTextSize: '2em',
    cardsPerView: '1',


    // Contact Page
    NeonContactPageTitle: '3.5rem',
    NeonContactPageTitleViewBoxHeight: '170',

    //footer
    footerHeaderFontSize: '1rem',
    footerButtonWidth: '200px',
    inputWidth: '200px',

  },
  '7.5rem': {
    fontSize: '4rem',
    NeonTitleFontSize: '7.5rem',
    NeonSectionTitleFontSize: '7.5rem',
    NeonTextFontSize: '6rem',
    viewBoxHeight: 110,
    NeonTitleViewBoxHeight: 110,
    svgViewBoxHeight: 105,
    boxWidth: '280px',
    bulbSize: '18px',
    comedyClubBulbSize: '18px',
    microphoneWidth: '50px',
    faceWidth: '150px',
    arrowWidth: '240px',
    arrowTextSize: '2.4em',
    cardsPerView: '2.25',

    // Contact Page
    NeonContactPageTitle: '6.5rem',
    NeonContactPageTitleViewBoxHeight: '0',

    //footer
    footerHeaderFontSize: '.9rem',
    footerButtonWidth: '200px',
    inputWidth: '200px',
  },
  '8.5rem': {
    fontSize: '6rem',
    NeonTitleFontSize: '8.5rem',
    NeonSectionTitleFontSize: '6.5rem',
    NeonTextFontSize: '6rem',
    viewBoxHeight: 115,
    NeonTitleViewBoxHeight: 115,
    svgViewBoxHeight: 115,
    boxWidth: '320px',
    bulbSize: '32px',
    comedyClubBulbSize: '22px',
    microphoneWidth: '70px',
    faceWidth: '220px',
    arrowWidth: '300px',
    arrowTextSize: '2.5em',
    cardsPerView: '3.25',

    // Contact Page
    NeonContactPageTitle: '6.5rem',
    NeonContactPageTitleViewBoxHeight: '0',

    //footer
    footerHeaderFontSize: '1rem',
    footerButtonWidth: '200px',
    inputWidth: '200px',

  },
} as const;

export type FontSizeKey = keyof typeof scaleMap;
