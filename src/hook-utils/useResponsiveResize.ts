// src/hook-utils/useResponsiveResize.ts
import { useState, useEffect } from 'react';
import { breakpoints, BreakpointKey } from '@/styles/breakpoints';

export default function useResponsiveResize() {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<BreakpointKey>('desktop');

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < breakpoints.mobileS) {
        setCurrentBreakpoint('mobileS');
      } else if (w < breakpoints.mobileM) {
        setCurrentBreakpoint('mobileM');
      } else if (w < breakpoints.mobileL) {
        setCurrentBreakpoint('mobileL');
      } else if (w < breakpoints.tablet) {
        setCurrentBreakpoint('tablet');
      } else if (w < breakpoints.laptop) {
        setCurrentBreakpoint('laptop');
      } else {
        setCurrentBreakpoint('desktop');
      }
    }

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return { currentBreakpoint };
}
