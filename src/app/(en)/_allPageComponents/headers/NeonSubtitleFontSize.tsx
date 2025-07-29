'use client'
import styled from 'styled-components';
import useResponsiveResize from '@/hook-utils/useResponsiveResize';
import { scaleMap } from '@/styles/scaleMap/_scaleMap';
// import SvgWrapper from '../svg/SvgWrapper';

interface NeonSubtitleFontSizeProps {
  children: string;
  color?: string;
}

const Wrapper = styled.div<{ $fontSize: string }>`
// border: 2px solid red;
font-size: ${({ $fontSize }) => $fontSize};

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
      <svg
        id="subtitle-scene"
        width="100%"
        viewBox={`${NeonSubtitleViewBoxMinX} ${NeonSubtitleViewBoxMinY} ${NeonSubtitleViewBoxWidth} ${NeonSubtitleViewBoxHeight}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>

          <filter id="glow" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="glow-large" x="-300%" y="-300%" width="600%" height="600%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="25" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      {/* this CSS will only ever apply inside this one SVG */}
  <style>
    {`

      #subtitle-scene text {
        filter: url(#glow);
      }

      /* swap in big glow at ≥1440px */
      @media screen and (min-width: 1440px) {
        #subtitle-scene text {
          filter: url(#glow-large) !important;
        }
      }
    `}
  </style>
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
