'use client';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const FeedWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

declare global {
  interface Window {
    fbAsyncInit?: () => void;
    FB?: { init: Function; XFBML: { parse: (el?: HTMLElement) => void } };
  }
}

export default function FacebookFeed() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // 1) IntersectionObserver → setVisible
  useEffect(() => {
    if (!ref.current || visible) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setVisible(true), obs.disconnect()),
      { rootMargin: '0px 0px 200px' }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [visible]);

  // 2) Load & init FB SDK, or just parse if already present
  useEffect(() => {
    if (!visible) return;

    if (window.FB) {
      // SDK is already here → just parse
      window.FB.XFBML.parse(ref.current!);
      return;
    }

    window.fbAsyncInit = () => {
      window.FB!.init({ xfbml: true, version: 'v19.0' });
      window.FB!.XFBML.parse(ref.current!);
    };

    const style = document.createElement('style');
    style.innerHTML = `
.FacebookFeed__FeedWrapper-sc-5931885c-0 { /* … */ }
  .gVfpsh                        { /* … */ }
  .fb-page                       { /* … */ }
  .fb_iframe_widget              { /* … */ }
  .UjScaledImageContainer__2zfrf { /* … */ }
  ._1dro                         { /* … */ }
  ._2ph                          { /* … */ }
  .clearfix                      { /* … */ }
  ._2efs                         { /* … */ }
    `;

    document.head.appendChild(style);

    const s = document.createElement('script');
    s.id = 'facebook-jssdk';
    s.src = 'https://connect.facebook.net/en_US/sdk.js';
    s.async = true;
    document.body.appendChild(s);
  }, [visible]);

  return (
    <FeedWrapper ref={ref}>
      {visible && (
        <div
          className="fb-page"
          data-href="https://www.facebook.com/profile.php?id=61577337325283"
          data-tabs="timeline"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/profile.php?id=61577337325283"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/profile.php?id=61577337325283">
              Fliring Scene
            </a>
          </blockquote>
        </div>
      )}
    </FeedWrapper>
  );
}
