// TikkioWidget.tsx
'use client';
import { useRef, useEffect } from 'react';

declare global {
  interface Window { Tikkio?: { widgets?: { init?: (el: HTMLElement)=>void } } }
}

type TikkioWidgetProps = {
  strategy?: 'afterInteractive' | 'lazyOnload';
  onStatus?: (s: Status) => void;
}

type Status = 'loading' | 'ready' | 'empty';

export default function TikkioWidget({
  strategy = 'lazyOnload',
  onStatus,
}: TikkioWidgetProps) {

  const ref = useRef<HTMLDivElement>(null);
  const once = useRef(false);

  useEffect(() => {

     function mount(el: HTMLDivElement) {
    if (once.current) return;
    once.current = true;
    onStatus?.('loading');

    // preconnect + css + script (unchanged) …
    const pc = document.createElement('link');
    pc.rel = 'preconnect'; pc.href = 'https://tikkio.com'; pc.crossOrigin = 'anonymous';
    document.head.appendChild(pc);

    const css = document.createElement('link');
    css.rel = 'stylesheet'; css.href = 'https://tikkio.com/css/widgets.min.css';
    document.head.appendChild(css);

    const s = document.createElement('script');
    s.src = 'https://tikkio.com/js/widgets.js'; s.async = true; s.defer = true;
    s.onload = () => {
      const host = el.querySelector('.tikkio-event-widget') as HTMLElement;
      const decide = () =>
        onStatus?.(host && host.childElementCount > 0 ? 'ready' : 'empty');

      // Tikkio will mutate host; observe and decide once content arrives
      const mo = new MutationObserver(() => { mo.disconnect(); decide(); });
      mo.observe(host, { childList: true, subtree: true });

      // safety timeout if nothing arrives
      setTimeout(() => { mo.disconnect(); decide(); }, 4000);

      window.Tikkio?.widgets?.init?.(el);
    };
    document.body.appendChild(s);

    // mount node
    el.innerHTML = '<div class="tikkio-event-widget" data-organizer="fliring"></div>';
  }

    const el = ref.current; if (!el) return;

    if (strategy === 'afterInteractive') { mount(el); return; }

    const io = new IntersectionObserver((es, obs) => {
      if (es.some(e => e.isIntersecting)) { mount(el); obs.disconnect(); }
    }, { rootMargin: '0px 0px 200px 0px' });
    io.observe(el); return () => io.disconnect();
  }, [strategy, onStatus]);

  return <div ref={ref} />;
}
