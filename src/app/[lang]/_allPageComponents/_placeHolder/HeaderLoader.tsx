// components/HeaderLoader.tsx
'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import HeaderPlaceholder from './HeaderPlaceholder';
import AboveTheFold from '@/app/[lang]/(public)/(home)/components/01_AboveTheFold';
import type { Dictionary } from '@/data/i18n/types';

// only the mobile variant is dynamically loaded
const MobileHeader = dynamic(
  () => import('@/app/[lang]/(public)/(home)/components/01_AboveTheFold'),
  {
    ssr: false,
    loading: () => <HeaderPlaceholder />,
  }
);

type HeaderLoaderProps = {
  dict:
  Dictionary['home']['aboveTheFold'];

};

export default function HeaderLoader({ dict }: HeaderLoaderProps) {
  const [isMobile, setIsMobile] = useState(false);
  const MOBILE_BREAKPOINT = 768;

 useEffect(() => {
  const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
  const apply = (mq: MediaQueryList | MediaQueryListEvent) =>
    setIsMobile('matches' in mq ? mq.matches : (mq as MediaQueryList).matches);

  apply(mql); // set initial state
  mql.addEventListener?.('change', apply);
  return () => mql.removeEventListener?.('change', apply);
}, []);

  return isMobile ? <MobileHeader dict={dict} /> : <AboveTheFold dict={dict} />;
}
