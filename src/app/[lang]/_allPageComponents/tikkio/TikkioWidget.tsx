// components/widgets/TikkioWidget.tsx
'use client';
import { useRef, useEffect } from 'react';
import { whenTikkioReady, tikkioInit } from './tikkio-loader';

type Status = 'loading' | 'ready' | 'empty';
type Props = {
  strategy?: 'afterInteractive' | 'lazyOnload';
  onStatus?: (s: Status) => void;
  /** Called once when Tikkio has populated the DOM (after 'ready') */
  onDomReady?: (root: HTMLElement, wrapper: HTMLElement) => void;
};

// ===== DEV TOGGLES =====
// Simulate no events at all (short-circuit before loading Tikkio)
const MOCK_EMPTY = false;
// Force a longer loading state (ms)
// const MOCK_LOADING_MS = 0;
// After Tikkio renders, clear it so you can test empty fallback
const MOCK_AFTER_READY_HIDE = false;
// Duplicate the first rendered event N times to simulate a gallery
const MOCK_DUPLICATE_COUNT = 0; // e.g., 5 or 12
// =======================

declare global {
  interface Window {
    Tikkio?: { widgets?: { init?: (el?: HTMLElement) => void } };
  }
}

/** ---------- GLOBAL SINGLETON STATE (module-scope) ---------- */
let GLOBAL_ROOT: HTMLDivElement | null = null;
let GLOBAL_WRAPPER: HTMLDivElement | null = null;
let GLOBAL_OBS: MutationObserver | null = null;
let GLOBAL_DECIDED = false;
let GLOBAL_READY = false;
let GLOBAL_TIMEOUT: ReturnType<typeof setTimeout> | null = null;

// listeners to notify per-instance once global becomes ready
const READY_LISTENERS: Array<(root: HTMLElement, wrapper: HTMLElement) => void> = [];

function notifyReady() {
  if (GLOBAL_ROOT && GLOBAL_WRAPPER) {
    while (READY_LISTENERS.length) {
      const fn = READY_LISTENERS.shift()!;
      fn(GLOBAL_ROOT, GLOBAL_WRAPPER);
    }
  }
}

// create or reuse the global off-screen root + wrapper
function ensureGlobalHost(): { root: HTMLDivElement; wrapper: HTMLDivElement } {
  if (!GLOBAL_ROOT) {
    GLOBAL_ROOT = document.createElement('div');
    GLOBAL_ROOT.id = 'tikkio-global-root';
    // keep measurable (some widgets skip 0×0)
    Object.assign(GLOBAL_ROOT.style, {
      position: 'absolute',
      left: '-9999px',
      top: '0',
      width: '480px',
      height: 'auto',
      opacity: '0',
      pointerEvents: 'none',
    } as CSSStyleDeclaration);
    document.body.appendChild(GLOBAL_ROOT);
  }
  if (!GLOBAL_WRAPPER) {
    GLOBAL_WRAPPER = document.createElement('div');
    GLOBAL_WRAPPER.className = 'tikkio-widget-events';
    GLOBAL_WRAPPER.setAttribute('data-hook', 'tikkio-global-host');
    GLOBAL_WRAPPER.setAttribute('w-id', '24620');
    GLOBAL_WRAPPER.setAttribute('w-token', 'd8cc712d213f01f1036ffdaf45fe9f17b1292b3d');
    GLOBAL_WRAPPER.setAttribute('w-target', 'blank');
    GLOBAL_ROOT.appendChild(GLOBAL_WRAPPER);
  }
  return { root: GLOBAL_ROOT, wrapper: GLOBAL_WRAPPER };
}

function attachGlobalInto(el: HTMLElement) {
  if (!GLOBAL_ROOT) return;
  // make it visible in-flow here
  Object.assign(GLOBAL_ROOT.style, {
    position: 'static',
    left: '',
    top: '',
    width: '100%',
    opacity: '1',
    pointerEvents: 'auto',
  } as CSSStyleDeclaration);
  el.appendChild(GLOBAL_ROOT);
}

function stashGlobalOffscreen() {
  if (!GLOBAL_ROOT) return;
  // move back to body and hide off-screen, but KEEP children intact
  if (GLOBAL_ROOT.parentElement !== document.body) {
    document.body.appendChild(GLOBAL_ROOT);
  }
  Object.assign(GLOBAL_ROOT.style, {
    position: 'absolute',
    left: '-9999px',
    top: '0',
    width: '480px',
    opacity: '0',
    pointerEvents: 'none',
  } as CSSStyleDeclaration);
}

/** One-time global init */
function initGlobalOnce(onStatus?: (s: Status) => void, onDomReady?: (root: HTMLElement, wrapper: HTMLElement) => void) {
  if (GLOBAL_OBS || GLOBAL_DECIDED) return; // already observing/decided

  if (MOCK_EMPTY) {
    GLOBAL_DECIDED = true;
    GLOBAL_READY = false;
    onStatus?.('empty');
    return;
  }

  const { root, wrapper } = ensureGlobalHost();

  // Observe first population → decide ready/empty
  const decideOnce = () => {
    if (GLOBAL_DECIDED) return;
    GLOBAL_DECIDED = true;
    if (GLOBAL_TIMEOUT) { clearTimeout(GLOBAL_TIMEOUT); GLOBAL_TIMEOUT = null; }

    const has = wrapper.childElementCount > 0;

    if (has && MOCK_DUPLICATE_COUNT > 0 && !wrapper.dataset.mockDupApplied) {
      const template = wrapper.firstElementChild as HTMLElement | null;
      if (template) {
        for (let i = 0; i < MOCK_DUPLICATE_COUNT; i++) {
          const clone = template.cloneNode(true) as HTMLElement;
          clone.setAttribute('data-mock', '1');
          clone.setAttribute('aria-hidden', 'true');
          wrapper.appendChild(clone);
        }
        wrapper.dataset.mockDupApplied = '1';
      }
    }

    GLOBAL_READY = has;
    onStatus?.(has ? 'ready' : 'empty');
    if (has) {
      requestAnimationFrame(() => onDomReady?.(root, wrapper));
      notifyReady(); // wake any listeners waiting for ready
    }

    if (has && MOCK_AFTER_READY_HIDE) {
      setTimeout(() => {
        wrapper.innerHTML = '';
        GLOBAL_READY = false;
        onStatus?.('empty');
      }, 300);
    }
  };

  GLOBAL_OBS = new MutationObserver(() => {
    GLOBAL_OBS?.disconnect();
    decideOnce();
  });
  GLOBAL_OBS.observe(wrapper, { childList: true, subtree: true });

  // safety timeout
  GLOBAL_TIMEOUT = setTimeout(() => {
    GLOBAL_OBS?.disconnect();
    decideOnce();
  }, 5000);

  // load SDK (once) and init into the global root
  whenTikkioReady().then(() => {
    tikkioInit(root);
    // If synchronous injection happened (no mutation), decide now
    queueMicrotask(() => {
      if (!GLOBAL_DECIDED && wrapper.childElementCount > 0) {
        GLOBAL_OBS?.disconnect();
        decideOnce();
      }
    });
  });
}

/** -------------------- COMPONENT -------------------- */
export default function TikkioWidget({
  strategy = 'lazyOnload',
  onStatus,
  onDomReady,
}: Props) {
  const mountRef = useRef<HTMLDivElement>(null);
  const ioRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const mountNow = () => {
      const { root, wrapper } = ensureGlobalHost();

      // If global already ready, tell this instance immediately
      if (GLOBAL_READY) {
        onStatus?.('ready');
        requestAnimationFrame(() => onDomReady?.(root, wrapper));
      } else {
        onStatus?.('loading');
        // register a one-time listener for when global becomes ready
        READY_LISTENERS.push((r, w) => {
          onStatus?.('ready');
          requestAnimationFrame(() => onDomReady?.(r, w));
        });
      }

      // Attach the global root into this widget container
      attachGlobalInto(el);

      // Kick off global init on first-ever mount (no-ops if already done)
      initGlobalOnce(onStatus, onDomReady);
    };

    if (strategy === 'afterInteractive') {
      mountNow();
    } else {
      ioRef.current = new IntersectionObserver(([entry], obs) => {
        if (entry.isIntersecting) {
          obs.disconnect();
          mountNow();
        }
      }, { rootMargin: '0px 0px 200px 0px' });
      ioRef.current.observe(el);
    }

    return () => {
      // On unmount, stash the singleton off-screen (do NOT clear children).
      stashGlobalOffscreen();
      ioRef.current?.disconnect();
    };
  }, [strategy, onStatus, onDomReady]);

  return <div ref={mountRef} />;
}
