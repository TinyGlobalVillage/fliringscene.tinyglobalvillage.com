// components/widgets/TikkioWidget.tsx
'use client';
import { useRef, useEffect } from 'react';

export type TikkioWidgetProps = {
  /** When to load: immediately or when scrolled into view */
  strategy?: 'afterInteractive' | 'lazyOnload';
  /** Additional class names to scope styles per-page */
  className?: string;
};

export default function TikkioWidget({
  strategy = 'afterInteractive',
  className = '',
}: TikkioWidgetProps) {
  const widgetRef = useRef<HTMLDivElement>(null);
  const loadedOnce = useRef(false);

  function mountAndLoad(el: HTMLDivElement) {
    if (loadedOnce.current) return;
    loadedOnce.current = true;

    // 1) create the widget wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'tikkio-widget-events';
    wrapper.setAttribute('w-id', '24620');
    wrapper.setAttribute('w-token', 'd8cc712d213f01f1036ffdaf45fe9f17b1292b3d');
    wrapper.setAttribute('w-target', 'blank');
    el.appendChild(wrapper);

    // 2) remove any old widget script
    document
      .querySelectorAll('script[src*="/widgets/tikkio/"]')
      .forEach(oldScript => oldScript.remove());

    // 3) inject the self-hosted widget script
    const script = document.createElement('script');
    script.src = '/widgets/tikkio/widgets.min.js';
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

  return (
    <div
      ref={widgetRef}
      className={`tikkio-widget-container ${className}`.trim()}
    />
  );
}
