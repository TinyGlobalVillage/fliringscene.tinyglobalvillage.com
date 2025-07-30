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
  svg text {
    text-shadow:
      0 0 1px #00bfff,
      0 0 3px #00bfff,
      0 0 5px #00bfff;
  }

`;

export default function NeonSubtitleFontSize({
  children,
  color = '#00bfff',

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
        >
          {children}
        </text>
      </svg>
    </Wrapper>
  );
}
