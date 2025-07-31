// NeonText.tsx
'use client';
import styled from 'styled-components';
import { scaleMap } from '@/styles/scaleMap/_scaleMap';
import useResponsiveResize from '@/hook-utils/useResponsiveResize';

interface NeonTextFontSizeProps {
  children: string;
  color?: string;
  fontWeight?: number;
}

const SvgWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export default function NeonText({
  children,
  color = '#ff4ecb',
  fontWeight = 700,
}: NeonTextFontSizeProps) {
  const { currentBreakpoint } = useResponsiveResize();
  const { NeonTextFontSize } = scaleMap[currentBreakpoint as keyof typeof scaleMap];

  return (
    <SvgWrapper>
      <svg width="100%" viewBox="0 -10 500 100" preserveAspectRatio="xMidYMid meet">

        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="'Josefin Sans', sans-serif"
          fontSize={NeonTextFontSize}
          fontWeight={fontWeight}
          fill={color}

        >
          {children}
        </text>
      </svg>
    </SvgWrapper>
  );
}
