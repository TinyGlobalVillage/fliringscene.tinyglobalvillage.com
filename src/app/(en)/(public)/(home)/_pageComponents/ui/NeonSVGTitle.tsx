import styled from 'styled-components';

interface NeonSVGTitleProps {
  children: string;
  color?: string;
  size?: string;
  strokeWidth?: string;
}

const SvgWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export default function NeonSVGTitle({
  children,
  color = '#ff4ecb',
  size = '6rem',
  strokeWidth = '3.75',
}: NeonSVGTitleProps) {
  return (
    <SvgWrapper>
      <svg width="100%" height="150px" viewBox="0 0 600 150">
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
          fontSize={size}
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
