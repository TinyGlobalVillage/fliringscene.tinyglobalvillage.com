'use client';
import { useRef, useEffect } from 'react';

export default function TikkioWidget({ strategy = 'lazyOnload' }:{
  strategy?: 'afterInteractive'|'lazyOnload';
}) {
  const ref = useRef<HTMLDivElement>(null), once = useRef(false);

  function mount(el: HTMLDivElement) {
    if (once.current) return; once.current = true;

    // preconnect
    const pc = document.createElement('link');
    pc.rel = 'preconnect'; pc.href = 'https://tikkio.com'; pc.crossOrigin = 'anonymous';
    document.head.appendChild(pc);

    // style
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'https://tikkio.com/css/widgets.min.css';
    document.head.appendChild(css);

    // script
    const s = document.createElement('script');
    s.src = 'https://tikkio.com/js/widgets.js';
    s.async = true; s.defer = true;
    s.onload = () => (window as any).Tikkio?.widgets?.init?.(el);
    document.body.appendChild(s);

    // mount node
    el.innerHTML = '<div class="tikkio-event-widget" data-organizer="fliring"></div>';
  }

  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (strategy === 'afterInteractive') { mount(el); return; }
    const io = new IntersectionObserver((entries, obs) => {
      if (entries.some(e => e.isIntersecting)) { mount(el); obs.disconnect(); }
    }, { rootMargin: '0px 0px 200px 0px' });
    io.observe(el); return () => io.disconnect();
  }, [strategy]);

  return <div ref={ref} />;
}
