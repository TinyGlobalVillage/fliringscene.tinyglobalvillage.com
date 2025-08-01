// components/HeaderLoader.tsx
'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import HeaderPlaceholder from './HeaderPlaceholder';
import AboveTheFold from '@/app/[lang]/(public)/(home)/components/01_AboveTheFold';


// only the mobile variant is dynamically loaded
const MobileHeader = dynamic(
  () => import('@/app/[lang]/(public)/(home)/components/01_AboveTheFold'),
  {
    ssr: false,
    loading: () => <HeaderPlaceholder />,
  }
);

type HeaderLoaderProps = {
  dict: {
    title: string;
    subtitle: string;
    ctaLabel: string;
    // add other localized strings as needed
  };
};

export default function HeaderLoader({ dict }: HeaderLoaderProps) {
  const [isMobile, setIsMobile] = useState(false);
  const MOBILE_BREAKPOINT = 768;

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return isMobile ? <MobileHeader dict={dict} /> : <AboveTheFold dict={dict} />;
}
