'use client';
import React, {
  forwardRef,
  useRef,
  useLayoutEffect,
  useMemo,
  useCallback,
  UIEventHandler,
} from 'react';
import styled from 'styled-components';
import { media } from '@/styles/breakpoints';


const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  gap: 1rem;
  padding: 1rem;

  /* hide native scrollbar */
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }

  -webkit-overflow-scrolling: touch;
`;

const Item = styled.div`
  scroll-snap-align: start;
  flex-shrink: 0;
  width: calc((100% + 1rem) / 3.25 - 1rem);

  @media ${media.tablet} {
    width: calc((100% + 1rem) / 2.25 - 1rem);
  }
  @media ${media.mobileM} {
    width: 100%;
  }
`;

export type EndlessScrollContainerProps = {
  children: React.ReactNode;
};

const EndlessScrollContainer = forwardRef<
  HTMLDivElement,
  EndlessScrollContainerProps
>(({ children }, ref) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const containerRef = (ref as React.RefObject<HTMLDivElement>) || innerRef;

  // 1) Triple-clone your children
  const items = useMemo(() => {
    const arr = React.Children.toArray(children);
    return arr.length ? [...arr, ...arr, ...arr] : [];
  }, [children]);

  // 2) scroll to the middle copy
  const scrollToMiddle = useCallback(() => {
    const el = containerRef.current;
    if (!el || items.length === 0) return;
    el.scrollLeft = el.scrollWidth / 3;
  }, [containerRef, items.length]);

  // on mount & whenever `items` changes
  useLayoutEffect(() => {
    scrollToMiddle();
  }, [scrollToMiddle]);

  // 3) Loop logic
  const handleScroll: UIEventHandler<HTMLDivElement> = useCallback((e) => {
    const el = e.currentTarget;
    const third = el.scrollWidth / 3;
    if (el.scrollLeft <= 0) {
      el.scrollLeft = third;
    } else if (el.scrollLeft >= third * 2) {
      el.scrollLeft = third;
    }
  }, []);

  if (items.length === 0) return null;

  return (

      <ScrollContainer ref={containerRef} onScroll={handleScroll}>
        {items.map((child, idx) => (
          <Item key={idx}>{child}</Item>
        ))}
      </ScrollContainer>

  );
});

EndlessScrollContainer.displayName = 'EndlessScrollContainer';
export default EndlessScrollContainer;
