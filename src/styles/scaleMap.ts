// scaleMap.ts
export const scaleMap = {
  '6.5rem': {
    // homepage

      // **** up for deletion ****
        // fontSize: '6.5rem',
        // viewBoxHeight: 105,
        // svgViewBoxHeight: 90,

      // Section Title
      NeonSectionTitleFontSize: '6.5rem',

      //above the fold

        //navbar

        //Above Fold Title
        NeonTitleFontSize: '6.5rem',
        NeonTitleViewBoxHeight: 105,
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
    NeonContactPageTitle: '3.5rem',
    NeonContactPageTitleViewBoxHeight: '170',

    //footer
    footerHeaderFontSize: '1rem',
    footerButtonWidth: '200px',
    inputWidth: '200px',

  },
  '7.5rem': {
    // homepage

      // **** up for deletion ****
        // fontSize: '4rem',
        // viewBoxHeight: 110,
        // svgViewBoxHeight: 105,

        // Section Title
        NeonSectionTitleFontSize: '7.5rem',

      //above the fold

        //navbar

        //Above Fold Title
        NeonTitleFontSize: '11rem',
        NeonTitleViewBoxHeight: 160,
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
    NeonContactPageTitle: '6.5rem',
    NeonContactPageTitleViewBoxHeight: '0',

    //Footer
    footerHeaderFontSize: '.9rem',
    footerButtonWidth: '200px',
    inputWidth: '200px',
  },
  '8.5rem': {
    // homepage

      // **** up for deletion ****
        // fontSize: '6rem',
        // viewBoxHeight: 115,
        // svgViewBoxHeight: 115,

      // Section Title
      NeonSectionTitleFontSize: '6.5rem',

      //above the fold

        //navbar

        //Above Fold Title
        NeonTitleFontSize: '15rem',
        NeonTitleViewBoxHeight: 205,
        // create stroke width

        // Comedy Sign
        comedyClubBulbSize: '22px',
        NeonTextFontSize: '6rem',
        boxWidth: '520px',
        bulbSize: '32px',

        // FaceMicArrow
        microphoneWidth: '70px',
        faceWidth: '220px',
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
    NeonContactPageTitleViewBoxHeight: '0',



  },
} as const;

export type FontSizeKey = keyof typeof scaleMap;
