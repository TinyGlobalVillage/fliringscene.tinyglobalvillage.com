import { useEffect, useState } from 'react';

export default function useResponsiveResize() {
  const [sizing, setSizing] = useState({fontSize: '8.5rem', viewBoxHeight: 115  });

//   __Option__
//   const [sizing, setSizing] = useState<{ fontSize: '6.5rem' | '7.5rem' | '8.5rem'; viewBoxHeight: number }>({
//   fontSize: '8.5rem',
//   viewBoxHeight: 115,
// });

useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setSizing({ fontSize: '6.5rem', viewBoxHeight: 90 });
      } else if (width <= 768) {
        setSizing({ fontSize: '7.5rem', viewBoxHeight: 105 });
      } else {
        setSizing({ fontSize: '8.5rem', viewBoxHeight: 115 });
      }
    };
    handleResize(); // Call once on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return sizing;
}
