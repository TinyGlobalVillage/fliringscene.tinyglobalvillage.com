// scaleMap.ts (new or shared)
export const scaleMap = {
  '6.5rem': {
    fontSize: '6.5rem',
    boxWidth: '220px',
    bulbSize: '15px',
    viewBoxHeight: 105,
    NeonTextFontSize: '6.5rem',
    NeonTitleFontSize: '6.5rem',
    svgViewBoxHeight: 90,
    microphoneWidth: '30px',
    faceWidth: '100px',
    arrowWidth: '200px',
    arrowTextSize: '2em',
  },
  '7.5rem': {
    fontSize: '4rem',
    boxWidth: '280px',
    bulbSize: '18px',
    viewBoxHeight: 110,
    NeonTextFontSize: '6rem',
    NeonTitleFontSize: '7.5rem',
    svgViewBoxHeight: 105,
    microphoneWidth: '60px',
    faceWidth: '190px',
    arrowWidth: '260px',
    arrowTextSize: '2.4em',
  },
  '8.5rem': {
    fontSize: '6rem',
    boxWidth: '320px',
    bulbSize: '22px',
    viewBoxHeight: 115,
    NeonTextFontSize: '6rem',
    NeonTitleFontSize: '8.5rem',
    svgViewBoxHeight: 115,
    microphoneWidth: '70px',
    faceWidth: '220px',
    arrowWidth: '300px',
    arrowTextSize: '2.5em',
  },
} as const;

export type FontSizeKey = keyof typeof scaleMap;
