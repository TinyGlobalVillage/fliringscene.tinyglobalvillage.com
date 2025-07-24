'use client';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToPreviousSectionStyle = styled.button<{ $visible: boolean}>`
  position: fixed;
  bottom: 15px;
  right: 20px;
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 50%;
  background: #ff4ecb;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${({ $visible }: { $visible: boolean }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }: { $visible: boolean }) => ($visible ? 'auto' : 'none')};
  transition: opacity 0.3s ease;
  z-index: 10000;

  &:hover {
    color: #00bfff !important;
              transform: scale(1.1) !important;
              filter: drop-shadow(0 0 8px #ff4ecb) !important;
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
