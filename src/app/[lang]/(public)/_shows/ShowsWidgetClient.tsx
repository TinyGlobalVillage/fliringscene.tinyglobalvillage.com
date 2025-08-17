'use client';

import { useState } from 'react';
import TikkioWidget from '../../_allPageComponents/tikkio/TikkioWidget';
import { WidgetWrapper } from './ShowsPageWrapper';

type Status = 'loading' | 'ready' | 'empty';

export default function ShowsWidgetClient({
  loadingText,
  emptyTitle,
  emptyBody,
}: {
  loadingText: string;
  emptyTitle: string;
  emptyBody: string;
}) {
  const [status, setStatus] = useState<Status>('loading');

  if (status === 'empty') {
    return (
      <section aria-live="polite" style={{ textAlign: 'center', padding: '1rem 0 2rem' }}>
        <h3 style={{ margin: '0 0 .5rem' }}>{emptyTitle}</h3>
        <p style={{ margin: 0, opacity: 0.9 }}>{emptyBody}</p>
      </section>
    );
  }

  return (
    <WidgetWrapper>
      {/* Skeleton while widget decides */}
      {/* {status === 'loading' && (
        <div
          aria-hidden="true"
          style={{
            minHeight: 300,
            borderRadius: 16,
            overflow: 'hidden',
            background:
              'linear-gradient(90deg, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0.15) 37%, rgba(255,255,255,0.06) 63%)',
            backgroundSize: '400% 100%',
            animation: 'showsShimmer 1.2s linear infinite',
          }}
          role="status"
        >
          <span style={{ position: 'absolute', left: -9999 }}>{loadingText}</span>
        </div>
      )} */}
      {status === 'loading' && (
        <p role="status" aria-live="polite" style={{ textAlign: 'center', padding: '1rem 0' }}>
          {loadingText}
        </p>
      )}

      <style jsx>{`
        @keyframes showsShimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          div[role='status'] { animation: none; }
        }
      `}</style>

      {/* AfterInteractive loads immediately after hydration on this page */}
      <TikkioWidget strategy="afterInteractive" onStatus={setStatus} />
    </WidgetWrapper>
  );
}
