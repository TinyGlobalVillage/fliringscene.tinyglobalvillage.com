'use client';
import React, { forwardRef, useEffect, useState, useRef } from 'react';
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
  font-size: 3rem;
  color: #ff4ecb;
  cursor: pointer;
  user-select: none;
  z-index: 10;
  padding: 0;
`;

const LeftArrow = styled(Arrow)`left: 25%;`;
const RightArrow = styled(Arrow)`right: 25%;`;

const ScrollContainer = styled.div<{ $eventCount: number }>`
  display: flex;
  position: relative;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  gap: 1rem;
  padding: 1rem;
  max-width: 100%;

  -webkit-overflow-scrolling: touch;
  touch-action: pan-x;

  user-select: none;
  cursor: grab;
  &.dragging {
    cursor: grabbing;
  }

  justify-content: ${({ $eventCount }) =>
    $eventCount === 1
      ? 'center'
      : $eventCount <= 3
      ? 'space-between'
      : 'flex-start'};
`;

type EndlessScrollContainerProps = {
  children?: React.ReactNode;
};

export const EndlessScrollContainer = forwardRef<
  HTMLDivElement,
  EndlessScrollContainerProps
>(({ children }, ref) => {
  const localRef = useRef<HTMLDivElement>(null);
  // coalesce ref into a typed RefObject
  const scrollRef = (ref as React.RefObject<HTMLDivElement>) ?? localRef;
  const container = scrollRef.current;

  const [eventCount, setEventCount] = useState(0);
  const [cloned, setCloned] = useState(false);

  useEffect(() => {
    if (!container) return;
    const target = container.querySelector('.tikkio-widget-events');
    if (!target) return;

    const mo = new MutationObserver(() => {
      const cards = target.children.length;
      if (cards === 1 && !cloned) {
        const original = target.children[0] as HTMLElement;
        for (let i = 0; i < 3; i++) {
          const clone = original.cloneNode(true) as HTMLElement;
          target.appendChild(clone);
        }
        setCloned(true);
        setEventCount(4);
      } else {
        setEventCount(cards);
      }
    });

    mo.observe(target, { childList: true });
    return () => mo.disconnect();
  }, [container, cloned]);

  useEffect(() => {
    if (!container) return;
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onDown = (e: MouseEvent | TouchEvent) => {
      isDown = true;
      startX = 'touches' in e ? e.touches[0].pageX : e.pageX;
      scrollLeft = container.scrollLeft;
      container.classList.add('dragging');
    };
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = 'touches' in e ? e.touches[0].pageX : e.pageX;
      container.scrollLeft = scrollLeft - (x - startX) * 1.5;
    };
    const onUp = () => {
      isDown = false;
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
      container.removeEventListener('touchstart', onDown as EventListener);
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('touchmove', onMove as EventListener);
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
      <LeftArrow onClick={() => scrollByPage('left')} aria-label="Prev">
        ◀
      </LeftArrow>
      <ScrollContainer ref={scrollRef} $eventCount={eventCount}>
        {children}
      </ScrollContainer>
      <RightArrow onClick={() => scrollByPage('right')} aria-label="Next">
        ▶
      </RightArrow>
    </Wrapper>
  );
});

EndlessScrollContainer.displayName = 'EndlessScrollContainer';
export default EndlessScrollContainer;
