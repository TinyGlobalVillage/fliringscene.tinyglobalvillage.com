'use client'
import styled from 'styled-components';
import { media } from '@/styles/breakpoints';
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
svg text {
text-shadow:
0 0 1px #ff66cc,
0 0 2px #ff66cc,
0 0 6px #ff66cc;
}

@media ${media.laptop}{
margin-top: -20px;
margin-bottom: -20px;
}
@media ${media.laptopL}{
margin-top: 0px;
margin-bottom: 0px;
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

        >
          {children}
        </text>
      </svg>
    </SvgWrapper>
  );
}
