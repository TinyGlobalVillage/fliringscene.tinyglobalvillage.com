'use client';
import { keyframes } from 'styled-components';

export const flicker = keyframes`
  0% { opacity:0.1; box-shadow: 0 0 78px 4px rgba(16,134,232,0.73); }
  2% { opacity:1;   box-shadow: 0 0 78px 4px rgba(16,134,232,0.73); }
  4% { opacity:0.1; box-shadow: 0 0 78px 4px rgba(16,134,232,0.73); }
  8% { opacity:1;   box-shadow: 0 0 78px 4px rgba(16,134,232,0.73); }
  70% { opacity:0.7; box-shadow: 0 0 78px 4px rgba(16,134,232,0.73); }
  100% { opacity:1;  box-shadow: 0 0 78px 4px rgba(16,134,232,0.73); }
`;
