// src/hook-utils/getAboutContent.ts

import { aboutContent, type AboutSectionData } from '@/data/about/aboutPageData';
import type { AboutContent } from '@/data/i18n/types';

export interface AboutSectionContent {
  id:            number;
  images:        string[];      // guaranteed array
  text:          string;
  alt:           string[];
  imageCaptions: string[];
}

/**
 * Merge your static aboutContent (images) with
 * the localized AboutContent (textArray) by id.
 */
export function getAboutContent(
  content: AboutContent
): AboutSectionContent[] {
  const lookup = new Map(
    content.textArray.map(item => [item.id, item])
  );

  return aboutContent.map((section: AboutSectionData) => {
    const localized = lookup.get(section.id);

    // text defaults
    const txt  = localized?.text     ?? '';
    const alt  = localized?.alt      ?? '';
    const cap  = localized?.captions ?? '';

    // ensure images is at least an empty array
    const imgs = section.images ?? [];

    return {
      id:            section.id,
      images:        imgs,
      text:          txt,
      // produce one alt/caption per image (or empty array if no images)
      alt:           imgs.map(() => alt),
      imageCaptions: imgs.map(() => cap),
    };
  });
}
