// 'use client'
import styled from 'styled-components';

import useResponsiveResize from '@/hook-utils/useResponsiveResize';
import { scaleMap } from '@/styles/scaleMap/_scaleMap';


interface NeonTitleFontSizeProps {
  children: string;
  color?: string;
}

const SvgWrapper = styled.div`
width: 500px;
text-align: center;
// border: 2px solid red;

svg {
overflow: visible;
}
svg text {
text-shadow:
0 0 1px #ff66cc,
0 0 4px #ff66cc,
0 0 8px #ff66cc;
  }
`;

export default function NeonTitleFontSize({
  children,
  color = '#ff4ecb',
}: NeonTitleFontSizeProps) {
  const { currentBreakpoint } = useResponsiveResize();
  const { NeonTitleFontSize, NeonTitleStrokeWidth, NeonTitleViewBoxMinX, NeonTitleViewBoxMinY, NeonTitleViewBoxWidth, NeonTitleViewBoxHeight } = scaleMap[currentBreakpoint];

  return (
    <SvgWrapper>
      <svg width="100%" viewBox={`${NeonTitleViewBoxMinX} ${NeonTitleViewBoxMinY} ${NeonTitleViewBoxWidth} ${NeonTitleViewBoxHeight}`} preserveAspectRatio="xMidYMid meet">
        <text
          x="50%"
          y="60%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="sans-serif"
          fontSize={NeonTitleFontSize}
          stroke={color}
          strokeWidth={NeonTitleStrokeWidth}
          fill="none"
        >
          {children}
        </text>
      </svg>
    </SvgWrapper>
  );
}
