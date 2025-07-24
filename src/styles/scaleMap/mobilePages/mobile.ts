import { mobileAllPagesScales } from "./_allPageScales/_mobileAllPagesScales";
import { mobilepHomeScales } from "./_allPageScales/_mobileHomeScales";
import { mobilepAboutScales } from "./_allPageScales/mobileAboutScales";
import { mobileContactScales } from "./_allPageScales/mobileContactScales";
import { mobileGalleryScales } from "./_allPageScales/mobileGalleryScales";
import { mobileShowScales } from "./_allPageScales/mobileShowsScales";


export const mobileScales = {
  '6.5rem': {
    // **** up for deletion ****
    // fontSize: '6.5rem',
    // viewBoxHeight: 105,
    // svgViewBoxHeight: 90,
    ...mobileAllPagesScales,
    ...mobilepHomeScales,
    ...mobilepAboutScales,
    ...mobileContactScales,
    ...mobileGalleryScales,
    ...mobileShowScales,


  },

} as const;
