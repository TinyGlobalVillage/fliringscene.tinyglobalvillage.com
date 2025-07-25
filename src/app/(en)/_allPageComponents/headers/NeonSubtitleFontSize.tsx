'use client'
import styled from 'styled-components';

import useResponsiveResize from '@/hook-utils/useResponsiveResize';
import { scaleMap } from '@/styles/scaleMap/scaleMap';
// import SvgWrapper from '../svg/SvgWrapper';

interface NeonSubtitleFontSizeProps {
  children: string;
  color?: string;
}

const Wrapper = styled.div`
  // border: 2px solid red;

  svg {
    overflow: visible;
  }
`;

export default function NeonSubtitleFontSize({
  children,
  color = '#ff4ecb',

}: NeonSubtitleFontSizeProps) {
  const { fontSizeKey } = useResponsiveResize();
  const { NeonSubtitleFontSize, NeonSubtitleStrokeWidth, NeonSubtitleViewBoxMinX, NeonSubtitleViewBoxMinY, NeonSubtitleViewBoxWidth, NeonSubtitleViewBoxHeight } = scaleMap[fontSizeKey];

  return (
    <Wrapper>
      <svg width="100%" viewBox={`${NeonSubtitleViewBoxMinX} ${NeonSubtitleViewBoxMinY} ${NeonSubtitleViewBoxWidth} ${NeonSubtitleViewBoxHeight}`} preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2" result="blur1" />
            <feGaussianBlur stdDeviation="4" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <text
          x="50%"
          y="60%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="sans-serif"
          fontSize={NeonSubtitleFontSize}
          stroke={color}
          strokeWidth={NeonSubtitleStrokeWidth}
          fill="none"
          filter="url(#glow)"
        >
          {children}
        </text>
      </svg>
    </Wrapper>
  );
}
