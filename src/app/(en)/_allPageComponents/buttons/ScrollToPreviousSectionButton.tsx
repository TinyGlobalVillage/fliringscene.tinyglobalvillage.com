'use client';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiArrowUp } from 'react-icons/fi';
import { media } from '@/styles/breakpoints';

const ScrollToPreviousSectionStyle = styled.button<{ $visible: boolean }>`
display: flex;
align-items: center;
justify-content: center;

position: fixed;
bottom: 20px;
right: 6%;

width: 1.95rem;
height: 1.95rem;

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

@media ${media.mobileM}{
right: 3%;
width: 2rem;
height: 2rem;
}

@media ${media.mobileL}{
right: 7%;
width: 2.5rem;
height: 2.5rem;
}


`;

export default function ScrollToPreviousSectionButton() {
  const [visible, setVisible] = useState(false);

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
    <ScrollToPreviousSectionStyle onClick={scrollToPreviousSection} $visible={visible} aria-label="Scroll to previous section">
      <FiArrowUp size={20} />
    </ScrollToPreviousSectionStyle>
  );
}
