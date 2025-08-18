// src/app/[lang]/(public)/(home)/components/02_UpcomingShows.tsx
'use client';

import { useState } from 'react';
import NeonSectionTitleFontSize from '../../../_allPageComponents/headers/NeonSectionTitleFontSize';
import TikkioWidget from '../../../_allPageComponents/tikkio/TikkioWidget';
// import TikkioGallery from '@/app/[lang]/_allPageComponents/tikkio/TikkioGallery';
import {
  UpcomingShowsSection,
  HeadingWrapper,
  TikkioWrapper,
  ShowsWrapper,
  // LoadingPlaceholder,   // ⬅️ new
  // LoadingText,          // ⬅️ new (if you want text-only)
  EmptyState,           // ⬅️ new
} from './02_Wrapper';
import type { Dictionary } from '@/data/i18n/types';

type UpcomingShowProps = {
  dict: Dictionary['home']['upcomingShows'];
};

type Status = 'loading' | 'ready' | 'empty';

export default function UpcomingShows({ dict }: UpcomingShowProps) {
  const [status, setStatus] = useState<Status>('loading');

  return (
    <UpcomingShowsSection id="upcoming-show" aria-live="polite">
      <ShowsWrapper>

      <HeadingWrapper>
        <NeonSectionTitleFontSize>{dict.title}</NeonSectionTitleFontSize>
      </HeadingWrapper>

      {status === 'empty' ? (
        <EmptyState>
          <h3>{dict.noShowsTitle ?? 'Ingen show akkurat nå'}</h3>
          <p>{dict.noShowsBody ?? 'Meld deg på nyhetsbrevet for å få beskjed om neste dato.'}</p>
        </EmptyState>
      ) : (
        <TikkioWrapper>
          {/* Pick ONE of these two loading UIs: */}

          {/* A) Shimmer block */}
          {/* {status === 'loading' && <LoadingPlaceholder aria-hidden="true" />} */}

          {/* B) Text-only loading (uncomment if you prefer) */}
          {/* {status === 'loading' && (
            <LoadingText role="status" aria-live="polite">
            {dict.loadingEvents ?? 'Loading events…'}
            </LoadingText>
            )} */}

          <TikkioWidget strategy="lazyOnload" onStatus={setStatus} />
          {/* <TikkioGallery onStatus={setStatus} /> */}
          {/* <TikkioWidget strategy="lazyOnload" /> */}
        </TikkioWrapper>
      )}
      </ShowsWrapper>
    </UpcomingShowsSection>
  );
}
