'use client';
import styled, { keyframes } from 'styled-components';
import { glowPulse } from '../animations/glowPulse';
import useResponsiveResize from '@/hook-utils/useResponsiveResize';

// --- Animations ---
const bulbPulse = keyframes`
  0%,100% { opacity:1; box-shadow:0 0 4px #fff,0 0 12px #ff0; }
  50% { opacity:0.7; box-shadow:0 0 2px #fff,0 0 8px #f90; }
`;

// --- Sizing ---
const scaleMap = {
  '6.5rem': { boxWidth: '240px', bulbSize: '8px' },
  '7.5rem': { boxWidth: '280px', bulbSize: '10px' },
  '8.5rem': { boxWidth: '320px', bulbSize: '12px' },
} as const;

// --- Styled Components ---
const SignWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 19px;
  border: 8px solid #f7b700;
  border-radius: 55px;
  animation: ${glowPulse} 2.5s infinite;
  box-shadow: 0 0 10px #f7b700, 0 0 25px #f7b700;
  background: rgba(0, 0, 0, 0.1);
`;

const BulbWrapper = styled.div`
  position: relative;
  padding: 17px;
  display: inline-flex;
`;

const FramedBox = styled.div<{ $scale: string }>`
  width: ${({ $scale }) =>
    $scale === '6.5rem' ? '240px' :
    $scale === '7.5rem' ? '280px' :
    '320px'};
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
`;

const Bulb = styled.div<{ $top: string; $left: string; $scale: string }>`
  width: ${({ $scale }) =>
    $scale === '6.5rem' ? '8px' :
    $scale === '7.5rem' ? '10px' :
    '12px'};
  height: ${({ $scale }) =>
    $scale === '6.5rem' ? '8px' :
    $scale === '7.5rem' ? '10px' :
    '12px'};
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
  { top: 0, left: 10 },
  { top: 0, left: 30 },
  { top: 0, left: 50 },
  { top: 0, left: 70 },
  { top: 0, left: 90 },
  { top: 100, left: 10 },
  { top: 100, left: 30 },
  { top: 100, left: 50 },
  { top: 100, left: 70 },
  { top: 100, left: 90 },
  { top: 10, left: 0 },
  { top: 30, left: 0 },
  { top: 50, left: 0 },
  { top: 70, left: 0 },
  { top: 90, left: 0 },
  { top: 10, left: 100 },
  { top: 30, left: 100 },
  { top: 50, left: 100 },
  { top: 70, left: 100 },
  { top: 90, left: 100 },
];

// --- Component ---
interface LightBulbFrameProps {
  children: React.ReactNode;
}

export default function LightBulbFrame({ children }: LightBulbFrameProps) {
  const { fontSize } = useResponsiveResize();
  const { boxWidth, bulbSize } = scaleMap[fontSize];

  return (
    <SignWrapper>
      <BulbWrapper>
        {bulbPositions.map(({ top, left }, i) => (
          <Bulb
            key={i}
            $top={`${top}%`}
            $left={`${left}%`}
            $scale={fontSize}
          />
        ))}

        <FramedBox $scale={fontSize}>
          {children}
        </FramedBox>
      </BulbWrapper>
    </SignWrapper>
  );
}
