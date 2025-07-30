// components/HeaderLoader.tsx
'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import HeaderPlaceholder from './HeaderPlaceholder';
import AboveTheFold from '@/app/(en)/(public)/(home)/components/01_AboveTheFold';
// ← adjust to your actual path

// only the mobile variant is dynamically loaded
const MobileHeader = dynamic(
  () => import('@/app/(en)/(public)/(home)/components/01_AboveTheFold'),
  {
    ssr: false,
    loading: () => <HeaderPlaceholder />,
  }
);

export default function HeaderLoader() {
  const [isMobile, setIsMobile] = useState(false);
  const MOBILE_BREAKPOINT = 768;

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return isMobile ? <MobileHeader /> : <AboveTheFold />;
}
