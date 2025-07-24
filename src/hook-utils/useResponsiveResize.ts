import { useEffect, useState } from 'react';
import type { FontSizeKey } from '../styles/scaleMap/scaleMap';

export default function useResponsiveResize() {
  const [fontSizeKey, setFontSizeKey] =
    useState<FontSizeKey>('8.5rem');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setFontSizeKey('6.5rem');
      } else if (width <= 768) {
        setFontSizeKey('7.5rem');
      } else {
        setFontSizeKey('8.5rem');
      }
    };

    handleResize(); // initial
    window.addEventListener('resize', handleResize);
    return () =>
      window.removeEventListener('resize', handleResize);
  }, []);

  return { fontSizeKey };
}
