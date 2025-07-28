// src/_allPageComponents/scroll-containers/SwipeScrollContainer.tsx
'use client';
import React, { forwardRef, useRef } from 'react';
import styled from 'styled-components';
import { media } from '@/styles/breakpoints';

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  padding: 1rem 0;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  /* hide native scrollbar */
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;

const Item = styled.div`
  scroll-snap-align: start;
  flex: 0 0 calc((100% - 2rem) / 3);

  @media ${media.tablet} {
    /* two cards: one gap of 1rem */
    flex: 0 0 calc((100% - 1rem) / 2);
  }
  @media ${media.mobileM} {
    /* one card */
    flex: 0 0 100%;
  }
`;

export type SwipeScrollContainerProps = {
  children: React.ReactNode;
};

const SwipeScrollContainer = forwardRef<
  HTMLDivElement,
  SwipeScrollContainerProps
>(({ children }, ref) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const containerRef = (ref as React.RefObject<HTMLDivElement>) || innerRef;
  const items = React.Children.toArray(children);
  if (!items.length) return null;

  return (
    <ScrollContainer ref={containerRef}>
      {items.map((child, i) => (
        <Item key={i}>{child}</Item>
      ))}
    </ScrollContainer>
  );
});

SwipeScrollContainer.displayName = 'SwipeScrollContainer';
export default SwipeScrollContainer;
