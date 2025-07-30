// components/HeaderLoader.tsx
'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import HeaderPlaceholder from './HeaderPlaceholder';

// 1) Desktop: SSR‐rendered, no placeholder
const DesktopHeader = dynamic(
  () => import('../../(public)/(home)/components/01_AboveTheFold'),
  { ssr: true }
);

// 2) Mobile: client only, shows placeholder while loading
const MobileHeader = dynamic(
  () => import('../../(public)/(home)/components/01_AboveTheFold'),
  {
    ssr: false,
    loading: () => <HeaderPlaceholder />
  }
);

export default function HeaderLoader() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 320);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // 3) Always call the same hooks (useState, useEffect) in the same order.
  //    Then choose which already‐imported component to render:
  return isMobile ? <MobileHeader /> : <DesktopHeader />;
}
