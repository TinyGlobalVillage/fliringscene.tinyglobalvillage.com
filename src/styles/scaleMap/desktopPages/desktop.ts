import { desktopAllPagesScales } from './_allPageScales/_desktopAllPagesScales';
import { desktopHomeScales } from './_allPageScales/_desktopHomeScales';
import { desktopAboutScales } from './_allPageScales/desktopAboutScales';
import { desktopContactScales } from './_allPageScales/desktopContactScales';
import { desktopGalleryScales } from './_allPageScales/desktopGalleryScales';
import { desktopShowScales } from './_allPageScales/desktopShowsScales';

export const desktopScales = {
  '8.5rem': {
    ...desktopAllPagesScales,
    ...desktopHomeScales,
    ...desktopAboutScales,
    ...desktopContactScales,
    ...desktopGalleryScales,
    ...desktopShowScales,
  },
} as const;

