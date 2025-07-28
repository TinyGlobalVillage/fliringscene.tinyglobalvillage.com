// src/app/(en)/(public)/_allPageComponents/facebook/FacebookIframe.tsx
'use client';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { media } from '@/styles/breakpoints';

const iframeParams: Record<string, string> = {
  href: 'https://www.facebook.com/profile.php?id=61577337325283',
  tabs: 'timeline',
  width: '300',
  height: '700',
  small_header: 'true',
  adapt_container_width: 'true',
  hide_cover: 'false',
  show_facepile: 'true',
};

function buildSrc(params: Record<string, string>) {
  // no cast needed: URLSearchParams accepts Record<string,string>
  return `https://www.facebook.com/plugins/page.php?${new URLSearchParams(params).toString()}`;
}

const FrameWrapper = styled.div`
  width: 100%;
  max-width: 800px;          /* desktop cap */
  margin: 2rem auto;
  aspect-ratio: 500 / 700;   /* 4:7 aspect ratio */
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);

  @media ${media.tablet} {
    max-width: 600px;
  }
  @media ${media.mobileM} {
    max-width: 100%;
    aspect-ratio: 3 / 5;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export default function FacebookIframe() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setInView(true), obs.disconnect()),
      { rootMargin: '0px 0px 200px' }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [inView]);

  const src = buildSrc(iframeParams);

  return (
    <FrameWrapper ref={ref}>
      {inView && (
        <iframe
          src={src}
          loading="lazy"
          title="Fliring Scene Facebook Feed"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      )}
    </FrameWrapper>
  );
}
