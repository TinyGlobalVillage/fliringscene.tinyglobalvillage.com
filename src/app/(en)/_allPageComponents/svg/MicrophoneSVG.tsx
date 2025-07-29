'use client';
// import styled from 'styled-components';
import useResponsiveResize from '@/hook-utils/useResponsiveResize';
import { scaleMap } from '@/styles/scaleMap/_scaleMap';

import SvgWrapper from './SvgWrapper';

const microphonePaths = [
  "M17.65 -279.04 C-26.05,-290.28 -57.05,-290.01 -86.7,-272.8 C-108.25,-260.3 -114.45,-238.91 -113.12,-223.11 C-111.41,-202.62 -104.3,-107.01 -98.47,-89.13 C-93.1,-72.64 -77.25,-49.18 -42.29,-49.18 C-7.33,-49.18 26.39,-48.05 46.36,-70.53 C66.34,-93 57.6,-140.45 53.86,-166.67 C50.11,-192.89 61.35,-267.81 17.65,-279.04z",
  "M-48.96 -46.38 C-48.96,-46.38 -60.53,27.93 -11.07,25.53 C38.67,23.11 20.84,-39.72 19.64,-52.89",
  "M-27.69 152.53 C-27.69,152.53 -27.69,28.94 -27.69,28.94",
  "M3.01 152.53 C3.01,152.53 2.16,27.23 2.16,27.23",
  "M-97.78 -113.33 C-97.78,-113.33 -85.33,-123.11 -48.89,-127.56",
  "M-100.78 -142.33 C-100.78,-142.33 -88.33,-152.11 -51.89,-156.56",
  "M-102.78 -172.33 C-102.78,-172.33 -90.33,-182.11 -53.89,-186.56",
  "M-103.78 -203.33 C-103.78,-203.33 -91.33,-213.11 -54.89,-217.56",
  "M-10.29 -130.81 C-10.29,-130.81 27.64,-137.33 54.21,-124.43",
  "M-13.29 -160.44 C-13.29,-160.44 20.77,-165.42 53.08,-155.93",
  "M-18.41 -190.44 C-18.41,-190.44 20.14,-195.39 49.83,-184.06",
  "M-19.41 -220.19 C-19.41,-220.19 20.77,-225.98 46.96,-209.44"
];

export default function MicrophoneSVG() {
  const { currentBreakpoint } = useResponsiveResize();
  const { micWidth, micViewBoxMinX, micViewBoxMinY, micViewBoxWidth, micViewBoxHeight } = scaleMap[currentBreakpoint];

  return (
    <SvgWrapper $width={micWidth}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`${micViewBoxMinX} ${micViewBoxMinY} ${micViewBoxWidth} ${micViewBoxHeight}`}
        preserveAspectRatio="xMidYMid meet"
        style={{
          // width: micWidth,
          overflow: 'visible',
        }}
      >
        <g
          transform="translate(0, 0)"
          style={{
            filter: 'drop-shadow(0 0 3px #fe9e17) drop-shadow(0 0 15px #ff9900)',
          }}
        >
          {microphonePaths.map((d, i) => (
            <path
              key={`orange-${i}`}
              d={d}
              stroke="#fe9e17"
              strokeWidth="11"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </g>
        <g
          transform="translate(0, 0)"
          style={{
            filter: 'drop-shadow(0 0 3px #f8e160) drop-shadow(0 0 15px #fe9e17)',
          }}
        >
          {microphonePaths.map((d, i) => (
            <path
              key={`yellow-${i}`}
              d={d}
              stroke="#f8e160"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </g>
      </svg>
    </SvgWrapper>
  );
}
