'use client';
import styled, { keyframes } from 'styled-components';
import { glowPulse } from '../animations/glowPulse';
import useResponsiveResize from '@/hook-utils/useResponsiveResize';
import { scaleMap } from '@/styles/scaleMap/_scaleMap';
import { media } from '@/styles/breakpoints';

// --- Animations ---
const bulbPulse = keyframes`
0%,100% { opacity:1; box-shadow:0 0 4px #fff,0 0 12px #ff0; }
50% { opacity:0.7; box-shadow:0 0 2px #fff,0 0 8px #f90; }
`;

// --- Styled Components ---
const SignWrapper = styled.div`
margin-top: 5px;
display: flex;
flex-direction: column;
align-items: center;
padding: 15px;
border: 8px solid #f7b700;
border-radius: 50px;
animation: ${glowPulse} 2.5s infinite;
box-shadow: 0 0 10px #f7b700, 0 0 25px #f7b700;
background: rgba(0, 0, 0, 0.1);

@media ${media.laptopL}{
border: 15px solid #f7b700;
border-radius: 50px;
padding: 1.25rem;
}

`;

const BulbWrapper = styled.div`
position: relative;
padding: 17px;
display: inline-flex;

@media ${media.laptopL}{
padding: 1.25rem;
}

`;

const FramedBox = styled.div<{ $width: string }>`
width: ${({ $width }) => $width};
padding: 10px;
border: 8px solid #f7b700;
border-radius: 28px;
display: flex;
flex-direction: column;
align-items: center;
animation: ${glowPulse} 2.5s infinite;
box-shadow: 0 0 10px #f7b700, 0 0 25px #f7b700;
background: rgba(0, 0, 0, 0.1);
z-index: 1;

@media ${media.fourK}{
border: 15px solid #f7b700;
border-radius: 80px;
padding: 2rem;
}
`;

const Bulb = styled.div<{ $top: string; $left: string; $size: string }>`
width: ${({ $size }) => $size};
height: ${({ $size }) => $size};
background: #fff;
border-radius: 50%;
position: absolute;
top: ${({ $top }) => $top};
left: ${({ $left }) => $left};
transform: translate(-50%, -50%);
animation: ${bulbPulse} 2s infinite ease-in-out;
z-index: 2;
`;

// --- Bulb Positions (static in %) ---
const bulbPositions = [
  // Top edge
  { top: 0, left: 10 },
  { top: 0, left: 30 },
  { top: 0, left: 50 },
  { top: 0, left: 70 },
  { top: 0, left: 90 },
  // Right edge
  { top: 15, left: 100 },
  { top: 38, left: 100 },
  { top: 61, left: 100 },
  { top: 85, left: 100 },
  // Bottom edge
  { top: 100, left: 10 },
  { top: 100, left: 30 },
  { top: 100, left: 50 },
  { top: 100, left: 70 },
  { top: 100, left: 90 },
  // Left edge
  { top: 15, left: 0 },
  { top: 38, left: 0 },
  { top: 61, left: 0 },
  { top: 85, left: 0 },
];

// --- Component ---
interface AboveFoldLightBulbFrameProps {
  children: React.ReactNode;
  positions?: Array<{ top: number; left: number }>;
}

export default function AboveFoldLightBulbFrame({
  children,
  positions = bulbPositions }: AboveFoldLightBulbFrameProps) {
  const { currentBreakpoint } = useResponsiveResize();
  const { boxWidth, comedyClubBulbSize } = scaleMap[currentBreakpoint];

  return (
    <SignWrapper>
      <BulbWrapper>
        {positions.map(({ top, left }, i) => (
          <Bulb
            key={i}
            $top={`${top}%`}
            $left={`${left}%`}
            $size={comedyClubBulbSize}
          />
        ))}

        <FramedBox $width={boxWidth}>
          {children}
        </FramedBox>
      </BulbWrapper>
    </SignWrapper>
  );
}
