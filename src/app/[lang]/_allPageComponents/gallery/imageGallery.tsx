'use client';

import * as React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

import {
  ImageGalleryWrapper, Slider, SlideContainer, MainImageWrapper, MainImage,
  ZoomOverlay, Overlay, Caption, NavButtonLeft, NavButtonRight,
  ThumbnailRow, Thumbnail, ZoomContent, CaptionZoom
} from './ImageGalleryStyles';

import type { GallerySlideContent } from '@/hook-utils/getGalleryContent';

interface ImageGalleryProps {
  slides: GallerySlideContent[];
  prevLabel: string;
  nextLabel: string;
}

export default function ImageGallery({ slides, prevLabel, nextLabel }: ImageGalleryProps) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [direction, setDir] = useState<'left' | 'right'>('right');
  const [zoomed, setZoomed] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const threshold = 50;
  const hasCaption = Boolean(slides[current].caption);

  // prevent body scroll when zoomed
  useEffect(() => {
    document.body.style.overflow = zoomed ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [zoomed]);

  const nextSlide = () => { setDir('right'); setPrev(current); setCurrent(i => (i + 1) % slides.length); };
  const prevSlide = () => { setDir('left'); setPrev(current); setCurrent(i => (i - 1 + slides.length) % slides.length); };

  function handleTouchStart(e: React.TouchEvent) { setTouchStartX(e.touches[0].clientX); }
  function handleTouchEnd(e: React.TouchEvent) {
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (deltaX > threshold) prevSlide();
    else if (deltaX < -threshold) nextSlide();
  }

  /* ---------- DRAG SCROLL for ThumbnailRow ---------- */
  const rowRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const pointerIdRef = useRef<number | null>(null);
  const startClientX = useRef(0);
  const startScrollLeft = useRef(0);
  const movedPx = useRef(0);

  const onPointerDownCapture = useCallback((e: React.PointerEvent) => {
    const el = rowRef.current;
    if (!el) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return; // left button only
    pointerIdRef.current = e.pointerId;
    el.setPointerCapture?.(e.pointerId);
    setDragging(true);
    movedPx.current = 0;
    startClientX.current = e.clientX;
    startScrollLeft.current = el.scrollLeft;
    e.preventDefault(); // stop selection/ghost drag
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    const el = rowRef.current;
    if (!dragging || !el) return;
    const dx = e.clientX - startClientX.current;
    movedPx.current = Math.max(movedPx.current, Math.abs(dx));
    el.scrollLeft = startScrollLeft.current - dx;
    e.preventDefault();
  }, [dragging]);

  const endDrag = useCallback(() => {
    setDragging(false);
    const el = rowRef.current;
    if (el && pointerIdRef.current != null) {
      try { el.releasePointerCapture?.(pointerIdRef.current); } catch {}
      pointerIdRef.current = null;
    }
  }, []);

  // Suppress click on thumbs after a drag
  const onClickCapture = (e: React.MouseEvent) => {
    if (movedPx.current > 6) { e.preventDefault(); e.stopPropagation(); }
  };
  /* --------------------------------------------------------------- */

  return (
    <>
      <ImageGalleryWrapper>
        <Slider onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
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
                onClick={() => setZoomed(true)}
              />
            </MainImageWrapper>

            <Overlay $hasCaption={hasCaption}>
              <NavButtonLeft onClick={prevSlide} aria-label={prevLabel}>‹</NavButtonLeft>
              {hasCaption && <Caption>{slides[current].caption}</Caption>}
              <NavButtonRight onClick={nextSlide} aria-label={nextLabel}>›</NavButtonRight>
            </Overlay>
          </SlideContainer>
        </Slider>

        <ThumbnailRow
          ref={rowRef}
          className={dragging ? 'dragging' : ''}
          onPointerDownCapture={onPointerDownCapture}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onDragStart={(e) => e.preventDefault()}
          onClickCapture={onClickCapture}
        >
          {slides.map((slide, idx) => (
            <Thumbnail
              key={slide.id}
              src={slide.thumbnail ?? slide.image}
              alt={slide.alt}
              $active={idx === current}
              draggable={false}                 
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
          <ZoomContent>
            <Image
              src={slides[current].image}
              alt={slides[current].alt}
              width={1200}
              height={800}
              style={{ maxWidth: '100vw', maxHeight: '100vh', objectFit: 'contain' }}
              priority
            />
            {slides[current].caption && <CaptionZoom>{slides[current].caption}</CaptionZoom>}
          </ZoomContent>
        </ZoomOverlay>
      )}
    </>
  );
}
