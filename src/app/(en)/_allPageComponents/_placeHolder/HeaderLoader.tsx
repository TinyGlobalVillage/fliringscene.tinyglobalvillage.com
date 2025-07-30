// components/HeaderLoader.tsx
'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import HeaderPlaceholder from './HeaderPlaceholder';
import AboveTheFold from '@/app/(en)/(public)/(home)/components/01_AboveTheFold'

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

  // reserve a fixed 568px high box (CSS px) for both placeholder & real header
  return (
    <div style={{ width: '100%', maxWidth: '320px', height: '768px', margin: '0 auto' }}>
      {isMobile ? <MobileHeader /> : <AboveTheFold />}
    </div>
  );
}
