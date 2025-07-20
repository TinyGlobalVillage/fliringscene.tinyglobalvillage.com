'use client'
import styled from 'styled-components';

interface NeonTextProps {
  children: string;
  color?: string;
  size?: string;
  fontWeight?: number;
}

const SvgWrapper = styled.div`
  width: 100%;
  text-align: center;
  // border: 2px solid red;
`;

export default function NeonText({
  children,
  color = '#ff4ecb',
  size = '4rem',
  fontWeight = 700,
}: NeonTextProps) {
  return (
    <SvgWrapper>
      <svg width="100%"  viewBox="0 -10 500 100" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="neonFillGlow" x="-100%" y="-100%" width="300%" height="300%">
           <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="blur1" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="'Josefin Sans', sans-serif"
          fontSize={size}
          fontWeight={fontWeight}
          fill={color}
          filter="url(#neonFillGlow)"
        >
          {children}
        </text>
      </svg>
    </SvgWrapper>
  );
}
