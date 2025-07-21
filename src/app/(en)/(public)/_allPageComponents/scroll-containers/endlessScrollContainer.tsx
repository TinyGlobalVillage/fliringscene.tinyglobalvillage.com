'use client';
import React, { forwardRef, useMemo, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const Arrow = styled.button`
  position: absolute;
  bottom: -1.5rem;
  background: none;
  border: none;
  font-size: 1.25rem;
  color: #ff4ecb;
  cursor: pointer;
  padding: 0;
  user-select: none;
  z-index: 10;
`;

const LeftArrow = styled(Arrow)`left: 40%;`;
const RightArrow = styled(Arrow)`right: 40%;`;

const ScrollContainer = styled.div<{ count: number }>`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  gap: 1rem;
  padding: 1rem;

  -webkit-overflow-scrolling: touch;
  touch-action: pan-x;
  user-select: none;
  cursor: grab;

  justify-content: ${({ count }) =>
    count === 1 ? 'center' : count <= 3 ? 'space-between' : 'flex-start'};
`;

export type EndlessScrollContainerProps = {
  children: React.ReactNode;
  /** if only 1 child, clone it `cloneTimes` more */
  cloneSingle?: boolean;
  cloneTimes?: number;
};

export const EndlessScrollContainer = forwardRef<
  HTMLDivElement,
  EndlessScrollContainerProps
>(({ children, cloneSingle = false, cloneTimes = 3 }, ref) => {
  const localRef = useRef<HTMLDivElement>(null);
  const container = (ref as React.RefObject<HTMLDivElement>)?.current ?? localRef.current;

  // 1) prepare children & clone if needed
  const items = useMemo(() => {
    const arr = React.Children.toArray(children);
    if (arr.length === 1 && cloneSingle) {
      return Array(cloneTimes + 1).fill(arr[0]);
    }
    return arr;
  }, [children, cloneSingle, cloneTimes]);

  // 2) drag/swipe handlers
  useEffect(() => {
    if (!container) return;
    let down = false, startX = 0, scrollL = 0;

    const onDown = (e: MouseEvent | TouchEvent) => {
      down = true;
      startX = 'touches' in e ? e.touches[0].pageX : e.pageX;
      scrollL = container.scrollLeft;
      container.classList.add('dragging');
    };
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!down) return;
      const x = 'touches' in e ? e.touches[0].pageX : e.pageX;
      container.scrollLeft = scrollL - (x - startX) * 1.5;
      e.preventDefault();
    };
    const onUp = () => {
      down = false;
      container.classList.remove('dragging');
    };

    container.addEventListener('mousedown', onDown);
    container.addEventListener('touchstart', onDown, { passive: true });
    container.addEventListener('mousemove', onMove);
    container.addEventListener('touchmove', onMove, { passive: false });
    container.addEventListener('mouseup', onUp);
    container.addEventListener('mouseleave', onUp);
    container.addEventListener('touchend', onUp);

    return () => {
      container.removeEventListener('mousedown', onDown);
      container.removeEventListener('touchstart', onDown as any);
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('touchmove', onMove as any);
      container.removeEventListener('mouseup', onUp);
      container.removeEventListener('mouseleave', onUp);
      container.removeEventListener('touchend', onUp);
    };
  }, [container]);

  const scrollByPage = (dir: 'left' | 'right') => {
    if (!container) return;
    container.scrollBy({
      left: dir === 'left' ? -container.offsetWidth : container.offsetWidth,
      behavior: 'smooth',
    });
  };

  return (
    <Wrapper>
      <LeftArrow onClick={() => scrollByPage('left')}>◀</LeftArrow>
      <ScrollContainer ref={ref ?? localRef} count={items.length}>
        {items}
      </ScrollContainer>
      <RightArrow onClick={() => scrollByPage('right')}>▶</RightArrow>
    </Wrapper>
  );
});

EndlessScrollContainer.displayName = 'EndlessScrollContainer';
export default EndlessScrollContainer;
