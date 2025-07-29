'use client'
import styled from 'styled-components';
import useResponsiveResize from '@/hook-utils/useResponsiveResize';
import { scaleMap } from '@/styles/scaleMap/_scaleMap';
// import SvgWrapper from '../svg/SvgWrapper';

interface NeonSubtitleFontSizeProps {
  children: string;
  color?: string;
}

const Wrapper = styled.div<{ $fontSize: string}>`
// border: 2px solid red;
font-size: ${({$fontSize}) => $fontSize};

display: flex;
justify-content: center;
align-items: center;
height: auto;

svg {
width: 100%;
height: auto;
overflow: visible;
}

`;

export default function NeonSubtitleFontSize({
  children,
  color = '#ff4ecb',

}: NeonSubtitleFontSizeProps) {
  const { currentBreakpoint } = useResponsiveResize();
  const { NeonSubtitleFontSize, NeonSubtitleStrokeWidth, NeonSubtitleViewBoxMinX, NeonSubtitleViewBoxMinY, NeonSubtitleViewBoxWidth, NeonSubtitleViewBoxHeight } = scaleMap[currentBreakpoint];

  return (
    <Wrapper $fontSize={NeonSubtitleFontSize}>
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
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="sans-serif"
          fontSize="1em"
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
