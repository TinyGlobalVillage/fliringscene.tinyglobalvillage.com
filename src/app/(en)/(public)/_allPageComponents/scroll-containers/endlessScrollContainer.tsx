'use client';
import React, { forwardRef, useMemo, useRef, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const Arrow = styled.button`
  position: absolute;
  background: none;
  border: none;
  font-size: 4rem;
  color: #ff4ecb;
  cursor: pointer;
  padding: 0;
  user-select: none;
  z-index: 10;
`;

const LeftArrow = styled(Arrow)`left: 30%;`;
const RightArrow = styled(Arrow)`right: 30%;`;

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

// New wrapper to add borders with alternating colors
const ItemWrapper = styled.div<{ borderColor: string }>`
  border: 4px solid ${({ borderColor }) => borderColor};
  border-radius: 16px;
  padding: 0.5rem;
  flex: 0 0 auto;
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
  const scrollRef = (ref as React.RefObject<HTMLDivElement>) ?? localRef;
  const containerElem = scrollRef.current;

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
    if (!containerElem) return;
    let down = false,
      startX = 0,
      scrollL = 0;

    const onDown = (e: MouseEvent | TouchEvent) => {
      down = true;
      startX = 'touches' in e ? e.touches[0].pageX : e.pageX;
      scrollL = containerElem.scrollLeft;
      containerElem.classList.add('dragging');
    };
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!down) return;
      const x = 'touches' in e ? e.touches[0].pageX : e.pageX;
      containerElem.scrollLeft = scrollL - (x - startX) * 1.5;
      e.preventDefault();
    };
    const onUp = () => {
      down = false;
      containerElem.classList.remove('dragging');
    };

    containerElem.addEventListener('mousedown', onDown);
    containerElem.addEventListener('touchstart', onDown as EventListener, { passive: true });
    containerElem.addEventListener('mousemove', onMove);
    containerElem.addEventListener('touchmove', onMove as EventListener, { passive: false });
    containerElem.addEventListener('mouseup', onUp);
    containerElem.addEventListener('mouseleave', onUp);
    containerElem.addEventListener('touchend', onUp);

    return () => {
      containerElem.removeEventListener('mousedown', onDown);
      containerElem.removeEventListener('touchstart', onDown as EventListener);
      containerElem.removeEventListener('mousemove', onMove);
      containerElem.removeEventListener('touchmove', onMove as EventListener);
      containerElem.removeEventListener('mouseup', onUp);
      containerElem.removeEventListener('mouseleave', onUp);
      containerElem.removeEventListener('touchend', onUp);
    };
  }, [containerElem]);

  const scrollByPage = (dir: 'left' | 'right') => {
    if (!containerElem) return;
    containerElem.scrollBy({
      left: dir === 'left' ? -containerElem.offsetWidth : containerElem.offsetWidth,
      behavior: 'smooth',
    });
  };

  // define the alternating colors
  const colors = ['#ff4ecb', '#00bfff', '#f7b700'];

  return (
    <Wrapper>
      <LeftArrow onClick={() => scrollByPage('left')}>◀</LeftArrow>
      <ScrollContainer ref={scrollRef} count={items.length}>
        {items.map((item, idx) => (
          <ItemWrapper key={idx} borderColor={colors[idx % colors.length]}>
            {item}
          </ItemWrapper>
        ))}
      </ScrollContainer>
      <RightArrow onClick={() => scrollByPage('right')}>▶</RightArrow>
    </Wrapper>
  );
});

EndlessScrollContainer.displayName = 'EndlessScrollContainer';
export default EndlessScrollContainer;
