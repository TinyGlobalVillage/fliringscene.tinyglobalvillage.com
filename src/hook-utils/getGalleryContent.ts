// src/hook-utils/getGalleryContent.ts

import { slides, type SlideData } from '@/data/gallery/galleryData';
import type { GalleryAboveFoldContent } from '@/data/i18n/types';

export interface GallerySlideContent extends SlideData {
  caption?: string;
  alt:     string;
}

export function getLocalizedSlides(
  localeGallery: GalleryAboveFoldContent['gallery']
): GallerySlideContent[] {
  const map = new Map(localeGallery.map(item => [item.id, item]));
  return slides.map(s => {
    const text = map.get(s.id);
    return {
      ...s,
      caption: text?.caption ?? '',
      alt:     text?.alt     ?? '',
    };
  });
}
