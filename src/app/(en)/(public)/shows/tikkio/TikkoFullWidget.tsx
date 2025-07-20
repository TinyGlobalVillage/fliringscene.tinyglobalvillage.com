'use client';

import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// --- Styled Components ---
const WidgetWrapper = styled.div`
  border: 2px solid red; // debug
`;

const ScrollContainer = styled.div<{ $eventCount: number }>`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 1rem;
  padding: 1rem;
  max-width: 100%;
  justify-content: ${({ $eventCount }) =>
        $eventCount === 1
            ? 'center'
            : $eventCount <= 3
                ? 'space-between'
                : 'flex-start'};
`;

export default function TikkioFullWidgetLazy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [loaded, setLoaded] = useState(false);
    const [eventCount, setEventCount] = useState(0);

    // 1. Lazy load when in view
    useEffect(() => {
        if (loaded || !containerRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLoaded(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '0px 0px 200px 0px' }
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [loaded]);

    // 2. Inject Tikkio widget and script
    useEffect(() => {
        if (!loaded || !containerRef.current) return;

        const style = document.createElement('style');
        style.innerHTML = `
    .tikkio-widget-events {
      display: flex !important;
      width: 100%;
      justify-content: center;
    }
  `;
        document.head.appendChild(style);

        const widgetDiv = document.createElement('div');
        widgetDiv.className = 'tikkio-widget-events';
        widgetDiv.setAttribute('w-id', '24620');
        widgetDiv.setAttribute('w-token', 'd8cc712d213f01f1036ffdaf45fe9f17b1292b3d');
        widgetDiv.setAttribute('w-target', 'blank');

        containerRef.current.appendChild(widgetDiv);

        const script = document.createElement('script');
        script.src = 'https://a.tikkio.com/static/1.1.1.1/js/widgets.js';
        script.async = true;

        containerRef.current.appendChild(script);
    }, [loaded]);

    // 3. Watch for widget content loaded
    useEffect(() => {
        if (!loaded || !containerRef.current) return;

        const target = containerRef.current.querySelector('.tikkio-widget-events');
        if (!target) return;

        const observer = new MutationObserver(() => {
            const cards = target?.children?.length || 0;
            setEventCount(cards);
        });

        observer.observe(target, { childList: true });
        return () => observer.disconnect();
    }, [loaded]);
    return (
        <WidgetWrapper>
            <ScrollContainer ref={containerRef} $eventCount={eventCount}>
                {/* Widget will be injected here */}
            </ScrollContainer>
        </WidgetWrapper>
    );
}
