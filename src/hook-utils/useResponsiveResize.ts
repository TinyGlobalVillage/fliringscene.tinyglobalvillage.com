// src/hook-utils/useResponsiveResize.ts
import { useState, useEffect } from 'react';
import { breakpoints, BreakpointKey } from '@/styles/breakpoints';

export default function useResponsiveResize() {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<BreakpointKey>('mobileS');

  useEffect(() => {
    function update() {

      const w = window.innerWidth;


      if (w <= breakpoints.mobileS) {
        setCurrentBreakpoint('mobileS');         // 0–320

      } else if (w <= breakpoints.mobileM) {
        setCurrentBreakpoint('mobileM');        // 321–374

      } else if (w <= breakpoints.mobileL) {
        setCurrentBreakpoint('mobileL');        // 375–424

      } else if (w <= breakpoints.tablet) {
        setCurrentBreakpoint('tablet');        // 425–767

      } else if (w <= breakpoints.laptop) {
        setCurrentBreakpoint('laptop');         // 768–1023

      } else if (w <= breakpoints.laptopL) {
        setCurrentBreakpoint('laptopL');         // 1024–1279
      } else {
        setCurrentBreakpoint('fourK');        // 2560+
      }
    }

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return { currentBreakpoint };
}
