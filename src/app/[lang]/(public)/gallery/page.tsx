// src/app/[lang]/(public)/gallery/page.tsx
import ImageGallery from '../../_allPageComponents/gallery/imageGallery';
import { getDictionary } from '@/data/i18n/getDictionary';
import { getLocalizedSlides } from '@/hook-utils/getGalleryContent';
import { GalleryWrapper } from './GalleryWrapper';

interface GalleryPageProps {
  params: Promise<{ lang: string }>;
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
