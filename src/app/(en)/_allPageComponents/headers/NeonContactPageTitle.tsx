'use client'
import styled from 'styled-components';

import useResponsiveResize from '@/hook-utils/useResponsiveResize';
import { scaleMap } from '@/styles/scaleMap/_scaleMap';


interface NeonContactPageTitleProps {
  children: string;
  color?: string;
  strokeWidth?: string;
}

const SvgWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  text-align: center;
  // border: 2px solid red;
  margin: 0 auto;
  svg {
    overflow: visible;
  }
`;

export default function NeonContactPageTitle({
  children,
  color = '#ff4ecb',
  strokeWidth = '2.75',
}: NeonContactPageTitleProps) {
  const { currentBreakpoint } = useResponsiveResize();
  const { NeonContactPageTitle, NeonContactPageTitleViewBoxHeight } = scaleMap[currentBreakpoint];

  return (
    <SvgWrapper>
      <svg width="100%" viewBox={`0 0 550 ${NeonContactPageTitleViewBoxHeight}`} preserveAspectRatio="xMidYMid meet">
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
          fontSize={NeonContactPageTitle}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          filter="url(#glow)"
        >
          {children}
        </text>
      </svg>
    </SvgWrapper>
  );
}
