// components/widgets/TikkioWidget.tsx
'use client';
import React, { useRef, useState, useEffect } from 'react';


export default function TikkioWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Lazy-load on intersection
  useEffect(() => {
    if (loaded || !widgetRef.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setLoaded(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px 200px 0px' }
    );
    io.observe(widgetRef.current);
    return () => io.disconnect();
  }, [loaded]);

  // Inject the widget
  useEffect(() => {
    if (!loaded || !widgetRef.current) return;

    const style = document.createElement('style');
    style.innerHTML = `
      .tikkio-widget-events
        {
        display: flex !important;
        width: 100% !important;
        justify-content: center!important;
        }

      // .tikkio-widget-events > * {
      //   flex:1 1 auto !important;
      //   max-width:100% !important;
      //   width:100% !important;
      // }

      .tikkio-widget-event-inside
        {
          box-shadow: 0 0 15px #00bfff, 0 0 15px #00bfff !important;
          border-radius: 25px;
        }

     .tikkio-widget-event-image
        {
          border-radius: 15px 15px 0px 0px;
        }

     .tikkio-widget-event-inner-content
        {
          background-color: rgba(0, 0, 0, 0.7)!important;
          color: #fff !important;
          font-size: 1.5rem !important;
          height: auto !important;
        }

     .tikkio-widget-event-title
        {
          font-size: 1rem !important;
          line-height: 1.7rem !important;
          height: auto !important;
        }

      .location
        {
          font-size: 2rem ;
          color: #ff4ecb !important;
        }

      .location br
        {
          color: rgba(0, 0, 0, 0.7)!important;
        }

      .tikkio-widget-buy-ticket
        {
          cursor: pointer !important;
          border-radius: 0 0 15px 15px !important;
          border: 1px solid #00bfff !important;
          color: #fff !important;
          background-color: rgba(200, 0, 255, 0.7) !important;
          transition: transform 0.2s ease, filter 0.2s ease !important;
          transform-origin: bottom center !important;
          &:hover
            {
              color: #00bfff !important;
              transform: scaleY(1.1) !important;
              filter: drop-shadow(0 0 8px #ff4ecb) !important;
            }
        }

      .tikkio-widget-buy-ticket-link
        {

        }
    `;
    document.head.appendChild(style);

    const wrapper = document.createElement('div');
    wrapper.className = 'tikkio-widget-events';
    wrapper.setAttribute('w-id', '24620');
    wrapper.setAttribute('w-token', 'd8cc712d213f01f1036ffdaf45fe9f17b1292b3d');
    wrapper.setAttribute('w-target', 'blank');
    widgetRef.current.append(wrapper);

    const script = document.createElement('script');
    script.src = 'https://a.tikkio.com/static/1.1.1.1/js/widgets.js';
    script.async = true;
    widgetRef.current.append(script);
  }, [loaded]);

  // simply render a container
  return <div ref={widgetRef} />;
}
