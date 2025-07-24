'use client'
import { keyframes } from 'styled-components';

export const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 10px #f7b700, 0 0 25px #f7b700;
  }
  50% {
    box-shadow: 0 0 20px #f7b700, 0 0 30px #f7b700;
  }
`;
