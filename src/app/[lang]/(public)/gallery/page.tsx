// src/app/[lang]/(public)/gallery/page.tsx
import ImageGallery from '../../_allPageComponents/gallery/ImageGallery';
import { getDictionary } from '@/data/i18n/getDictionary';
import { getLocalizedSlides } from '@/hook-utils/getGalleryContent';
import { GalleryWrapper } from './GalleryWrapper';

import { buildPageMetadata } from '@/hook-utils/buildPageMetadata';

import { LangParams } from '@/data/i18n/types';

interface GalleryPageProps {
  params: LangParams;
}

export async function generateMetadata(
  { params }: { params: LangParams }
) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return buildPageMetadata({ dictPage: dict.gallery, lang, route: '/gallery' });
}



export default async function GalleryPage({ params }: GalleryPageProps) {
  const { lang } = await params;

  // fetch your dict
  const dict = await getDictionary(lang);

  // pull out the above‐fold block
  const galObj = dict.gallery.galleryAboveFold;

  // server‐side merge into your Slide[] shape
  const slides = getLocalizedSlides(galObj.gallery);

  return (
    <GalleryWrapper>
      <h1>{galObj.sectionTitle}</h1>
      <ImageGallery
        slides={slides}
        prevLabel={galObj.prevLabel}
        nextLabel={galObj.nextLabel}
      />
    </GalleryWrapper>
  );
}
