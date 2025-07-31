'use client';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiArrowUp } from 'react-icons/fi';
import useResponsiveResize from '@/hook-utils/useResponsiveResize';
import { scaleMap } from '@/styles/scaleMap/_scaleMap';

const ScrollToPreviousSectionStyle = styled.button<{
  $visible: boolean
  $width: number;
  $height: number;

}>`
display: flex;
align-items: center;
justify-content: center;

position: fixed;
bottom: 20px;
right: .75rem;

width: ${({ $width }) => $width}px; //1.95rem
height: ${({ $height }) => $height}px; //1.95rem;

border: none;
border-radius: 50%;
background: #ff4ecb;
color: #fff;
cursor: pointer;
opacity: ${({ $visible }: { $visible: boolean }) => ($visible ? 1 : 0)};
pointer-events: ${({ $visible }: { $visible: boolean }) => ($visible ? 'auto' : 'none')};
transition: opacity 0.3s ease;

z-index: 9999;

&:hover {
color: #fff !important;
transform: scale(1.1) !important;
background: #00bfff;
filter: drop-shadow(0 0 8px #ff4ecb) !important;
}

`;

export default function ScrollToPreviousSectionButton() {
  const [visible, setVisible] = useState(false);
  const { currentBreakpoint } = useResponsiveResize();
  const { scrollButtonSize } = scaleMap[currentBreakpoint];

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToPreviousSection = () => {
    // grab all sections (or replace with your selector)
    const sections = Array.from(document.querySelectorAll<HTMLElement>('section[id]'));
    const scrollPos = window.scrollY;

    // find those above current scroll by at least 10px
    const prev = sections
      .map(sec => ({ sec, top: sec.offsetTop }))
      .filter(({ top }) => top < scrollPos - 10);

    if (prev.length) {
      // scroll to the last one (the nearest above)
      prev.pop()!.sec.scrollIntoView({ behavior: 'smooth' });
    } else {
      // fallback to very top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <ScrollToPreviousSectionStyle onClick={scrollToPreviousSection}
      $visible={visible}
      $width={scrollButtonSize}
      $height={scrollButtonSize}
      aria-label="Scroll to previous section">
      <FiArrowUp size={20} />
    </ScrollToPreviousSectionStyle>
  );
}
