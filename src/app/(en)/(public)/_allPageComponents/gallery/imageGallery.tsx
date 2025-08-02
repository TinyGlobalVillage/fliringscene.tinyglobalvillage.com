'use client';
import * as React from 'react';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { slides } from '../../gallery/data/data';

type AnimationKey = keyof typeof animationMap;

const animationMap = {
  slideInLeft: keyframes`
    from { transform: translateX(-100%); opacity: 0.7; }
    to   { transform: translateX(0); opacity: 1; }
  `,
  slideInRight: keyframes`
    from { transform: translateX(100%); opacity: 0.7; }
    to   { transform: translateX(0); opacity: 1; }
  `,
  slideOutLeft: keyframes`
    from { transform: translateX(0); opacity: 1; }
    to   { transform: translateX(-100%); opacity: 0; }
  `,
  slideOutRight: keyframes`
    from { transform: translateX(0); opacity: 1; }
    to   { transform: translateX(100%); opacity: 0; }
  `
};

// ── Styled Components ─────────────────────────────
const GalleryWrapper = styled.div`
  max-width: 900px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Slider = styled.div`
  position: relative;
  overflow: visible;
  border-radius: 1rem;
`;

const MainImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  padding: 0.5rem;
  border-radius: 1rem;
`;

const MainImage = styled.img<{ $animation: AnimationKey }>`
  position: absolute;
  max-width: 100%;
  max-height: 65vh;
  width: auto;
  height: auto;
  border-radius: 0.75rem;
  object-fit: contain;
  animation: ${({ $animation }) => animationMap[$animation]} 0.5s ease;
  opacity: 1;
  box-shadow:
    0 0 10px #fe9e17,
    0 0 20px #fe9e17,
    0 0 30px #fe9e17;
`;

const Overlay = styled.div`
 text-align: center;
  margin-top: -2rem;
  padding: 0.5rem 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border-radius: 0.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid #fe9e17;
  font-size: 2.5rem;
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  filter: drop-shadow(0 0 3px #fe9e17);

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    filter: drop-shadow(0 0 15px #fe9e17);
  }
`;

const NavButtonLeft = styled(NavButton)` left: 1rem; `;
const NavButtonRight = styled(NavButton)` right: 1rem; `;

const ThumbnailRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Thumbnail = styled.img<{ $active: boolean }>`
  width: 80px;
  height: 60px;
  object-fit: cover;
  border: 2px solid ${({ $active }) => ($active ? '#f7b700' : 'transparent')};
  border-radius: 6px;
  cursor: pointer;
  transition: border 0.2s;

  &:hover {
    border-color: #f7b700;
  }
`;

// ── Component ─────────────────────────────
export default function ImageGallery(): React.ReactElement {
  const [current, setCurrent] = useState<number>(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const nextSlide = () => {
    setDirection('right');
    setPrev(current);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection('left');
    setPrev(current);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <GalleryWrapper>
      <Slider>
        <MainImageWrapper>
          {prev !== null && (
            <MainImage
              key={`prev-${slides[prev].image}`}
              src={slides[prev].image}
              alt={slides[prev].alt}
              $animation={direction === 'right' ? 'slideOutLeft' : 'slideOutRight'}
            />
          )}

          <MainImage
            key={`current-${slides[current].image}`}
            src={slides[current].image}
            alt={slides[current].alt}
            $animation={direction === 'right' ? 'slideInRight' : 'slideInLeft'}
            onAnimationEnd={() => setPrev(null)}
          />
        </MainImageWrapper>

       {(slides[current].title || slides[current].description) && (
  <Overlay>
    {slides[current].title && <h2>{slides[current].title}</h2>}
    {slides[current].description && <p>{slides[current].description}</p>}
  </Overlay>
)}
        <NavButtonLeft onClick={prevSlide} aria-label="Previous slide">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 6L9 12L15 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </NavButtonLeft>

        <NavButtonRight onClick={nextSlide} aria-label="Next slide">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 6L15 12L9 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </NavButtonRight>
      </Slider>

      <ThumbnailRow>
        {slides.map((slide, index) => (
          <Thumbnail
            key={index}
            src={slide.thumbnail}
            alt={slide.alt}
            $active={index === current}
            onClick={() => {
              setDirection(index > current ? 'right' : 'left');
              setPrev(current);
              setCurrent(index);
            }}
          />
        ))}
      </ThumbnailRow>
    </GalleryWrapper>
  );
}