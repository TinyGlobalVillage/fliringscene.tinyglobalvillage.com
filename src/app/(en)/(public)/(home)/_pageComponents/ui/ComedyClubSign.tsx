'use client';
import styled from 'styled-components';

// import Nav from './Nav';
import NeonText from './NeonText';
// import { flicker } from '@/app/(en)/(public)/(home)/_pageComponents/animations/flicker';
import { glowPulse } from '../animations/glowPulse';

const SignWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const FramedBox = styled.div`
  width: 420px;
  height: auto;
  border: 8px solid #f7b700;
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${glowPulse} 3s infinite;
  box-shadow: 0 0 10px #f7b700, 0 0 25px #f7b700;
  background: rgba(0, 0, 0, 0.1); /* subtle glass glow */
  z-index: 10;
`;

export default function ComedyClubSign() {
  return (
    <SignWrapper>
      <FramedBox>
        <NeonText color="#ff66cc" size="5rem">COMEDY</NeonText>
        <NeonText color="#00bfff" size="5rem">CLUB</NeonText>
      </FramedBox>
    </SignWrapper>
  );
}
