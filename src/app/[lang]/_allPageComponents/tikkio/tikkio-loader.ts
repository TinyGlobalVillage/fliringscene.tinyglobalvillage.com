// src/lib/tikkio-ready.ts
declare global {
  interface Window {
    Tikkio?: { widgets?: { init?: (el?: HTMLElement) => void } };
  }
}

let readyPromise: Promise<void> | null = null;

export function whenTikkioReady(): Promise<void> {
  if (readyPromise) return readyPromise;

  readyPromise = new Promise<void>((resolve) => {
    // Already initialized?
    if (window.Tikkio?.widgets?.init) {
      resolve();
      return;
    }

    // Ensure single script
    let s = document.getElementById('tikkio-js') as HTMLScriptElement | null;
    if (!s) {
      s = document.createElement('script');
      s.id = 'tikkio-js';
      s.src = 'https://a.tikkio.com/static/1.1.1/js/widgets.js';
      s.async = true;
      s.onload = () => resolve();
      document.body.appendChild(s);
    } else {
      if (window.Tikkio?.widgets?.init) resolve();
      else s.addEventListener('load', () => resolve(), { once: true });
    }
  });

  return readyPromise;
}

export function tikkioInit(el?: HTMLElement) {
  // Scoped init first, then global scan as fallback
  window.Tikkio?.widgets?.init?.(el);
  window.Tikkio?.widgets?.init?.();
}
