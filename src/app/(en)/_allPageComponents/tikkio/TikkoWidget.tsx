// components/widgets/TikkioWidget.tsx
'use client';
import React, { useRef, useEffect } from 'react';

export default function TikkioWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const loadedOnce = useRef(false);

  useEffect(() => {
    const el = widgetRef.current;
    if (!el || loadedOnce.current) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadedOnce.current = true;

          // 1) Inject your style overrides
          const style = document.createElement('style');
          style.innerHTML = `
            // .tikkio-widget-events {
            //   display: flex !important;
            //   height: 100% !important;
            //   justify-content: center !important;
            // }
            // .tikkio-widget-events > * {
            //   // flex: 1 1 auto !important;
            //   // height: 100% !important;
            //   // max-height: 100% !important;
            //   width:100% !important;
            // }
            // .tikkio-widget-event-inside {
            //   // box-shadow: 0 0 15px #00bfff, 0 0 15px #00bfff !important;
            //   // border-radius: 25px;
            // }
            // .tikkio-widget-event-image {
            //   border-radius: 15px 15px 0px 0px;
            // }
            // .tikkio-widget-event-inner-content {
            //   background-color: rgba(0, 0, 0, 0.9)!important;
            //   color: #fff !important;
            //   font-size: 1.5rem !important;
            //   height: auto !important;
            // }
            // .tikkio-widget-event-title {
            //   font-size: 1rem !important;
            //   line-height: 1.7rem !important;
            //   height: auto !important;
            // }
            // .location {
            //   font-size: 2rem;
            //   color: #ff4ecb !important;
            // }

            // .tikkio-widget-buy-ticket {
            //   cursor: pointer !important;
            //   border-radius: 0 0 15px 15px !important;
            //   border: 1px solid #cc00aa !important;
            //   color: #fff !important;
            //   background:rgba(204, 0, 170, .9) !important;
            //   // transition: transform 0.2s ease, filter 0.2s ease !important;
            //   // transform-origin: bottom center !important;
            // }
            // .tikkio-widget-buy-ticket:hover {
            // background:
            //   color: #fff !important;
            //   background: #00bfff !important;
            //   border: 1px solid #00bfff !important;
            //   transform: scaleY(1.1) !important;
            //   filter: drop-shadow(0 0 8px #00bfff) !important;
            // }
          `;
          document.head.appendChild(style);

          // 2) Create & append the Tikkio wrapper
          const wrapper = document.createElement('div');
          wrapper.className = 'tikkio-widget-events';
          wrapper.setAttribute('w-id', '24620');
          wrapper.setAttribute('w-token', 'd8cc712d213f01f1036ffdaf45fe9f17b1292b3d');
          wrapper.setAttribute('w-target', 'blank');
          el.appendChild(wrapper);

          // 3) Append the widget script
          const script = document.createElement('script');
          script.src = 'https://a.tikkio.com/static/1.1.1.1/js/widgets.js';
          script.async = true;
          el.appendChild(script);

          io.disconnect();
        }
      },
      { rootMargin: '0px 0px 200px 0px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []); // ← only run once on mount

  return <div ref={widgetRef} />;
}
