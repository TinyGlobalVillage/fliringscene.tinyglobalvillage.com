// src/app/[lang]/(public)/gallery/page.tsx
import ImageGallery from '../../_allPageComponents/gallery/ImageGallery';
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
  const aboveFold = dict.gallery.galleryAboveFold;

  // server‐side merge into your Slide[] shape
  const slides = getLocalizedSlides(aboveFold.gallery);

  return (
    <GalleryWrapper>
      {/* <h1>{aboveFold.sectionTitle}</h1> */}
      <ImageGallery slides={slides} />
    </GalleryWrapper>
  );
}
