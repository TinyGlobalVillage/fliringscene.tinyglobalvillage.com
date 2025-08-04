'use client';

import * as React from 'react';
import { useState } from 'react';

import { GalleryWrapper, Slider, MainImageWrapper, MainImage, Overlay, NavButtonLeft, NavButtonRight, ThumbnailRow, Thumbnail } from './ImageGalleryStyles';


import type { GallerySlideContent } from '@/hook-utils/getGalleryContent';

interface ImageGalleryProps {
  slides: GallerySlideContent[];
}

// ── Component ─────────────────────────────
export default function ImageGallery({ slides }: ImageGalleryProps) {
  const [current, setCurrent]   = useState(0);
  const [prev, setPrev]         = useState<number|null>(null);
  const [direction, setDir]     = useState<'left'|'right'>('right');

  const nextSlide = () => {
    setDir('right');
    setPrev(current);
    setCurrent(i => (i + 1) % slides.length);
  };
  const prevSlide = () => {
    setDir('left');
    setPrev(current);
    setCurrent(i => (i - 1 + slides.length) % slides.length);
  };

  return (
    <GalleryWrapper>
      <Slider>
        <MainImageWrapper>
          {prev !== null && (
            <MainImage
              key={`prev-${slides[prev].id}`}
              src={slides[prev].image}
              alt={slides[prev].alt}
              $animation={direction === 'right' ? 'slideOutLeft' : 'slideOutRight'}
            />
          )}
          <MainImage
            key={`current-${slides[current].id}`}
            src={slides[current].image}
            alt={slides[current].alt}
            $animation={direction === 'right' ? 'slideInRight' : 'slideInLeft'}
            onAnimationEnd={() => setPrev(null)}
          />
        </MainImageWrapper>

        {/* Overlay now uses caption */}
        {slides[current].caption && (
          <Overlay>{slides[current].caption}</Overlay>
        )}

        <NavButtonLeft onClick={prevSlide} aria-label="Previous slide">
          ‹
        </NavButtonLeft>
        <NavButtonRight onClick={nextSlide} aria-label="Next slide">
          ›
        </NavButtonRight>
      </Slider>

      <ThumbnailRow>
        {slides.map((slide, idx) => (
          <Thumbnail
            key={slide.id}
            src={slide.thumbnail ?? slide.image}
            alt={slide.alt}
            $active={idx === current}
            onClick={() => {
              setDir(idx > current ? 'right' : 'left');
              setPrev(current);
              setCurrent(idx);
            }}
          />
        ))}
      </ThumbnailRow>
    </GalleryWrapper>
  );
}
