// scaleMap.ts
export const scaleMap = {
  '6.5rem': { // MOBILE
    // homepage

      // **** up for deletion ****
        fontSize: '6.5rem',
        viewBoxHeight: 105,
        svgViewBoxHeight: 90,

      // Section Title
      NeonSectionTitleFontSize: '6.5rem',

      //above the fold

        //navbar

        //Above Fold Title
        NeonTitleFontSize: '6.5rem',
        NeonTitleFontSizeB: '6.5rem',
        NeonTitleViewBoxHeight: 105,
        NeonTitleViewBoxHeightB: 105,
        // create stroke width

        // Comedy Sign
        comedyClubBulbSize: '15px',
        NeonTextFontSize: '6.5rem',
        boxWidth: '220px',
        bulbSize: '15px',

        // FaceMicArrow
        microphoneWidth: '30px',
        faceWidth: '100px',
        arrowWidth: '200px',
        arrowTextSize: '2em',

      // Upcoming Shows
        //title
        //tikkio widget sizing
        // arrow sizing

      // News Feed

      // Gallery
      cardsPerView: '1',

    // Contact Page
    NeonContactPageTitle: '5rem',
    NeonContactPageTitleViewBoxHeight: '90',

    //footer
    footerHeaderFontSize: '1rem',
    footerButtonWidth: '200px',
    inputWidth: '200px',

  },
  '7.5rem': { // TABLET
    // homepage

      // **** up for deletion ****
        fontSize: '4rem',
        viewBoxHeight: 110,
        svgViewBoxHeight: 105,

        // Section Title
        NeonSectionTitleFontSize: '6.5rem', // used on Shows page also

      //above the fold

        //navbar

        //Above Fold Title
        NeonTitleFontSize: '11rem',
        NeonTitleFontSizeB: '11rem',
        NeonTitleViewBoxHeight: 160,
        NeonTitleViewBoxHeightB: 160,
        // create stroke width

        // Comedy Sign
        comedyClubBulbSize: '18px',
        NeonTextFontSize: '6rem',
        boxWidth: '430px',
        bulbSize: '18px',

        // FaceMicArrow
        microphoneWidth: '50px',
        faceWidth: '150px',
        arrowWidth: '240px',
        arrowTextSize: '2.4em',

      // Upcoming Shows
        //title
        //tikkio widget sizing
        // arrow sizing

      // News Feed

      // Gallery
      cardsPerView: '2.25',

    // Contact Page
    NeonContactPageTitle: '6rem',
    NeonContactPageTitleViewBoxHeight: '90',

    //Footer
    footerHeaderFontSize: '.9rem',
    footerButtonWidth: '200px',
    inputWidth: '200px',
  },
  '8.5rem': { // DESKTOP
    // homepage

      // **** up for deletion ****
        fontSize: '6rem',
        viewBoxHeight: 115,
        svgViewBoxHeight: 115,

      // Section Title
      NeonSectionTitleFontSize: '6.5rem',

      //above the fold

        //navbar

        //Above Fold Title
        NeonTitleFontSize: '11rem',
        NeonTitleFontSizeB: '11rem',
        NeonTitleViewBoxHeight: 170,
        NeonTitleViewBoxHeightB: 170,
        // create stroke width

        // Comedy Sign
        comedyClubBulbSize: '22px',
        NeonTextFontSize: '6rem',
        boxWidth: '420px',
        bulbSize: '32px',

        // FaceMicArrow
        microphoneWidth: '50px',
        faceWidth: '190px',
        arrowWidth: '300px',
        arrowTextSize: '2.5em',

      // Upcoming Shows
        //title
        //tikkio widget sizing
        // arrow sizing

      // News Feed

      // Gallery
        cardsPerView: '3.25',

      //Footer
        footerHeaderFontSize: '1rem',
        footerButtonWidth: '200px',
        inputWidth: '200px',

    // Contact Page
    NeonContactPageTitle: '6.5rem',
    NeonContactPageTitleViewBoxHeight: '90',



  },
} as const;

export type FontSizeKey = keyof typeof scaleMap;
