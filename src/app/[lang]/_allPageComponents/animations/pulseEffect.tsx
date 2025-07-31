import styled, { keyframes } from 'styled-components';

const createPulseEffect = (color: string, scale: number) => keyframes`
  0%, 100% {
    transform: scale(1);
    filter: drop-shadow(0 0 1px #fff) drop-shadow(0 0 6px ${color});
    text-shadow: 0 0 0px ${color}, 0 0 0px ${color};
  }
  50% {
    transform: scale(${scale});
    filter: drop-shadow(0 0 1px #fff) drop-shadow(0 0 6px ${color});
    text-shadow: 0 0 1px ${color}, 0 0 1px ${color};
  }
`;

interface PulseProps {
  $color?: string;
  $scale?: number;
  $duration?: string;         // e.g. '2s'
  $easing?: string;           // e.g. 'ease-in-out'
  $iterationCount?: string;

}

export const PulsingWrapper = styled.div<PulseProps>`
  animation: ${({ $color = '#ff4ecb', $scale = 1.05 }) => createPulseEffect($color, $scale)}
             ${({ $duration = '4s' }) => $duration}
             ${({ $easing = 'ease-in-out' }) => $easing}
             ${({ $iterationCount = 'infinite' }) => $iterationCount};

             `;
