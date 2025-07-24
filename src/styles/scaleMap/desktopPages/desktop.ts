import { desktopAllPagesScales } from './_allPageScales/desktopAllPagesScales';
import { desktopHomeScales } from './(home)/desktopHomeScales';
import { desktopAboutScales } from './about/desktopAboutScales';
import { desktopContactScales } from './contact/desktopContactScales';
import { desktopGalleryScales } from './gallery/desktopGalleryScales';
import { desktopShowScales } from './shows/desktopShowsScales';

export const desktopScales = {
  '8.5rem': {
    ...desktopAllPagesScales['8.5rem'],
    ...desktopHomeScales['8.5rem'],
    ...desktopAboutScales['8.5rem'],
    ...desktopContactScales['8.5rem'],
    ...desktopGalleryScales['8.5rem'],
    ...desktopShowScales['8.5rem'],
  }
} as const;
