'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import { ImageGalleryWrapper, Slider, SlideContainer, MainImageWrapper, MainImage, ZoomOverlay, Overlay, Caption, NavButtonLeft, NavButtonRight, ThumbnailRow, Thumbnail, ZoomContent, CaptionZoom } from './ImageGalleryStyles';


import type { GallerySlideContent } from '@/hook-utils/getGalleryContent';

interface ImageGalleryProps {
  slides: GallerySlideContent[];
  prevLabel: string;
  nextLabel: string;
}

// ── Component ─────────────────────────────
export default function ImageGallery({ slides, prevLabel, nextLabel }: ImageGalleryProps) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [direction, setDir] = useState<'left' | 'right'>('right');
  const [zoomed, setZoomed] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);

  const threshold = 50; // px
  const hasCaption = Boolean(slides[current].caption);

  // (optional) prevent body scroll when zoomed
  useEffect(() => {
    document.body.style.overflow = zoomed ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [zoomed]);


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

  // ** NEW: touch start handler **
  function handleTouchStart(e: React.TouchEvent) {
    setTouchStartX(e.touches[0].clientX);
  }

  // ** NEW: touch end handler **
  function handleTouchEnd(e: React.TouchEvent) {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    if (deltaX > threshold) {
      prevSlide();
    } else if (deltaX < -threshold) {
      nextSlide();
    }
  }

  return (
    <>
      <ImageGalleryWrapper>
        <Slider
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <SlideContainer>
            <MainImageWrapper>
              {prev !== null && (
                <MainImage
                  key={`prev-${slides[prev].id}`}
                  src={slides[prev].image}
                  alt={slides[prev].alt}
                  $animation={direction === 'right' ? 'slideOutLeft' : 'slideOutRight'}
                  onClick={() => setZoomed(true)}
                />
              )}
              <MainImage
                key={`current-${slides[current].id}`}
                src={slides[current].image}
                alt={slides[current].alt}
                $animation={direction === 'right' ? 'slideInRight' : 'slideInLeft'}
                onAnimationEnd={() => setPrev(null)}
                onClick={() => setZoomed(true)}      /* clickable! */
              />
            </MainImageWrapper>

            <Overlay $hasCaption={hasCaption}>
              <NavButtonLeft onClick={prevSlide} aria-label={prevLabel}>‹</NavButtonLeft>

              {hasCaption && <Caption>{slides[current].caption}</Caption>}

              <NavButtonRight onClick={nextSlide} aria-label={nextLabel}>›</NavButtonRight>
            </Overlay>
          </SlideContainer>
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
      </ImageGalleryWrapper>
      {zoomed && (
        <ZoomOverlay onClick={() => setZoomed(false)}>
          <ZoomContent >
            <Image
              src={slides[current].image}
              alt={slides[current].alt}
              width={1200}                  // or whatever max you expect
              height={800}
              style={{
                maxWidth: '100vw',
                maxHeight: '100vh',
                objectFit: 'contain',
              }}
              priority
            />
            {slides[current].caption && (
              <CaptionZoom>{slides[current].caption}</CaptionZoom>
            )}
          </ZoomContent>
        </ZoomOverlay>
      )}
    </>
  );
}
