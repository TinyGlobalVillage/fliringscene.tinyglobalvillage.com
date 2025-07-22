'use client';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiArrowUp } from 'react-icons/fi';

const BackToTopButton = styled.button<{ visible: boolean}>`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
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
  opacity: ${({ visible }: { visible: boolean }) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }: { visible: boolean }) => (visible ? 'auto' : 'none')};
  transition: opacity 0.3s ease;
  z-index: 10000;

  &:hover {
    color: #00bfff !important;
              transform: scale(1.1) !important;
              filter: drop-shadow(0 0 8px #ff4ecb) !important;
  }
`;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <BackToTopButton onClick={scrollToTop} visible={visible} aria-label="Back to top">
      <FiArrowUp size={20} />
    </BackToTopButton>
  );
}
