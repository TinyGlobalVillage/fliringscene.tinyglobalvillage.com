'use client';
import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import styled from 'styled-components';

const FeedWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function FacebookFeed() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // only flip to "render the plugin" once in view
  useEffect(() => {
    if (!ref.current || visible) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: '0px 0px 200px' }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [visible]);

  return (
    <>
      {/* fb-root must live at top-level of the body */}
      <div id="fb-root" />

      {/* lazy load the Facebook SDK once the page itself is idle */}
      <Script
        strategy="lazyOnload"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0"
        onLoad={() => {
          // once it's on the page, parse *only* our container
          if (window.FB && ref.current) {
            window.FB.XFBML.parse(ref.current);
          }
        }}
      />

      <FeedWrapper ref={ref}>
        {visible && (
          <div
            className="fb-page"
            data-href="https://www.facebook.com/profile.php?id=61577337325283"
            data-tabs="timeline"
            data-width="500"
            data-height="600"
            data-small-header="false"
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
    </>
  );
}
