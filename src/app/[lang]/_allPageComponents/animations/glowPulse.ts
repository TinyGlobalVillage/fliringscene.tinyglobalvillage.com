'use client';
import { keyframes } from 'styled-components';

export const glowPulse = keyframes`
  0%, 100% {
    drop-shadow: 0 0 10px #f7b700, 0 0 25px #f7b700;
  }
  50% {
    drop-shadow: 0 0 20px #f7b700, 0 0 30px #f7b700;
  }
`;

export const glowPulseFilter = keyframes`
  0%, 100% {
    drop-shadow(0 0 3px #fe9e17) drop-shadow(0 0 15px #ff9900);
  }
  50% {
    drop-shadow(0 0 6px #fe9e17) drop-shadow(0 0 30px #ff9900);
  }

`;
