'use client';
import React, { forwardRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
//   padding: .5rem;
  overflow: hidden;
`;

 const Arrow = styled.button`
  position: absolute;
  bottom: -1.5rem;          /* drop below the embed */
  background: none;
  border: none;
  font-size:3rem;        /* shrink to dropdown-size */
  color: #ff4ecb;
  cursor: pointer;
  user-select: none;
  z-index: 10;
  padding: 0;
`;

const LeftArrow = styled(Arrow)`
  left: 25%;
`;

const RightArrow = styled(Arrow)`
  right: 25%;
`;

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

  /* desktop drag cursor */
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
    const [eventCount, setEventCount] = useState(0);
    const [cloned, setCloned] = useState(false);

    useEffect(() => {
        const container = (ref as React.RefObject<HTMLDivElement>)?.current;
        if (!container) return;
        const target = container.querySelector('.tikkio-widget-events');
        if (!target) return;

        const mo = new MutationObserver(() => {
            const cards = target.children.length;

            if (cards === 1 && !cloned) {
                // 1 card → clone it 3× to make 4 total
                const original = target.children[0];
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

        const el = (ref as React.RefObject<HTMLDivElement>)?.current;
        if (!el) return;

        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;

        // ---- MOUSE EVENTS ----
        const onMouseDown = (e: MouseEvent) => {
            isDown = true;
            el.classList.add('dragging');
            startX = e.pageX - el.offsetLeft;
            scrollLeft = el.scrollLeft;
        };
        const onMouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - el.offsetLeft;
            const walk = (x - startX) * 1.5; // tweak scroll speed
            el.scrollLeft = scrollLeft - walk;
        };
        const onMouseUpOrLeave = () => {
            isDown = false;
            el.classList.remove('dragging');
        };

        // ---- TOUCH EVENTS ----
        const onTouchStart = (e: TouchEvent) => {
            startX = e.touches[0].pageX - el.offsetLeft;
            scrollLeft = el.scrollLeft;
        };
        const onTouchMove = (e: TouchEvent) => {
            // prevent the browser’s rubber-band effect
            e.preventDefault();
            const x = e.touches[0].pageX - el.offsetLeft;
            const walk = (x - startX) * 1.5;
            el.scrollLeft = scrollLeft - walk;
        };

        el.addEventListener('mousedown', onMouseDown);
        el.addEventListener('mousemove', onMouseMove);
        el.addEventListener('mouseup', onMouseUpOrLeave);
        el.addEventListener('mouseleave', onMouseUpOrLeave);

        el.addEventListener('touchstart', onTouchStart, { passive: true });
        el.addEventListener('touchmove', onTouchMove, { passive: false });

        mo.observe(target, { childList: true });
        return () => {
            el.removeEventListener('mousedown', onMouseDown);
            el.removeEventListener('mousemove', onMouseMove);
            el.removeEventListener('mouseup', onMouseUpOrLeave);
            el.removeEventListener('mouseleave', onMouseUpOrLeave);

            el.removeEventListener('touchstart', onTouchStart);
            el.removeEventListener('touchmove', onTouchMove);
            mo.disconnect()
        };
    }, [ref, cloned]);

    const scrollByPage = (dir: 'left' | 'right') => {
        const container = (ref as React.RefObject<HTMLDivElement>)?.current;
        if (!container) return;
        const delta = container.offsetWidth;
        container.scrollBy({ left: dir === 'left' ? -delta : delta, behavior: 'smooth' });
    };

    return (
        <Wrapper>
            <LeftArrow onClick={() => scrollByPage('left')} aria-label="Prev">◀</LeftArrow>
            <ScrollContainer ref={ref as any} $eventCount={eventCount}>
                {children}
            </ScrollContainer>
            <RightArrow onClick={() => scrollByPage('right')} aria-label="Next">▶</RightArrow>
        </Wrapper>
    );
});

EndlessScrollContainer.displayName = 'EndlessScrollContainer';
export default EndlessScrollContainer;
