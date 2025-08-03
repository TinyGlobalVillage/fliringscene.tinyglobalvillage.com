// components/widgets/TikkioWidget.tsx
'use client';
import { useRef, useEffect } from 'react';

type TikkioWidgetProps = {
  strategy?: 'afterInteractive' | 'lazyOnload';
};

export default function TikkioWidget({
  strategy = 'lazyOnload',
}: TikkioWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null);
  const loadedOnce = useRef(false);

  // Pull out the mount-and-load logic into a fn that takes a real element
  function mountAndLoad(el: HTMLDivElement) {
    if (loadedOnce.current) return;
    loadedOnce.current = true;

    // 1) inject styles
    const style = document.createElement('style');
   style.innerHTML = `

    `;
    document.head.appendChild(style);

    // 2) mount the wrapper container
    const wrapper = document.createElement('div');
    wrapper.className = 'tikkio-widget-events';
    wrapper.setAttribute('w-id', '24620');
    wrapper.setAttribute('w-token', 'd8cc712d213f01f1036ffdaf45fe9f17b1292b3d');
    wrapper.setAttribute('w-target', 'blank');
    el.appendChild(wrapper);

    // 3) dynamically append the widget script (removing any prior one)
    document
      .querySelectorAll('script[src*="tikkio.com/static"]')
      .forEach((old) => old.remove());

    const script = document.createElement('script');
    script.src = 'https://a.tikkio.com/static/1.1.1/js/widgets.js';
    script.async = true;
    document.body.appendChild(script);
  }

  useEffect(() => {
    const el = widgetRef.current;
    if (!el) return;

    if (strategy === 'afterInteractive') {
      mountAndLoad(el);
    } else {
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            mountAndLoad(entry.target as HTMLDivElement);
            io.disconnect();
          }
        },
        { rootMargin: '0px 0px 200px 0px' }
      );
      io.observe(el);
      return () => io.disconnect();
    }
  }, [strategy]);

  return <div ref={widgetRef} />;
}
