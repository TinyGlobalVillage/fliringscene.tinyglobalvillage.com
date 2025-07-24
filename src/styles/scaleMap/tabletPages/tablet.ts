import { tabletAllPagesScales } from './_allPageScales/_tabletAllPagesScales';
import { tabletpHomeScales } from './_allPageScales/_tabletHomeScales';
import { tabletpAboutScales } from './_allPageScales/tabletAboutScales';
import { tabletContactScales } from './_allPageScales/tabletContactScales';
import { tabletGalleryScales } from './_allPageScales/tabletGalleryScales';
import { tabletShowScales } from './_allPageScales/tabletShowsScales';

export const tabletScales = {
  '7.5rem': {
    ...tabletAllPagesScales,
    ...tabletpHomeScales,
    ...tabletpAboutScales,
    ...tabletContactScales,
    ...tabletGalleryScales,
    ...tabletShowScales,

    // // **** up for deletion ****
    // fontSize: '4rem',
    // viewBoxHeight: 110,
    // svgViewBoxHeight: 105,

  },
} as const;
