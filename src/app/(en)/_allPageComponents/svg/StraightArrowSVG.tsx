import useResponsiveResize from '@/hook-utils/useResponsiveResize';
import { scaleMap } from '@/styles/scaleMap/_scaleMap';

export default function StraightArrow() {
  const { currentBreakpoint } = useResponsiveResize();
  const { arrowWidth, arrowTextSize } = scaleMap[currentBreakpoint as keyof typeof scaleMap];

  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="-790  9.5   590  180"
      preserveAspectRatio="xMidYMid meet"
      style={{
        width: arrowWidth,
        overflow: 'visible',
        background: 'transparent'
      }}
    >
      <path
        d="M-319.17 9.49
             C-319.17,9.49 -319.21,45.48 -319.21,45.48
             C-319.21,45.48 -781.43,45.48 -781.43,45.48
             C-781.43,45.48 -756.06,99.6 -756.06,99.6
             C-756.06,99.6 -781.88,152.15 -781.88,152.15
             C-781.88,152.15 -318.91,152.94 -318.91,152.94
             C-318.91,152.94 -318.81,192.12 -318.81,192.12
             C-318.81,192.12 -191.4,99.22 -191.4,99.22
             C-191.4,99.22 -319.17,9.49 -319.17,9.49z"
        fill="none"
        stroke="#fe9e17"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="1"
        style={{
          filter: 'drop-shadow(0 0 3px #fe9e17) drop-shadow(0 0 15px #ff9900)',
        }}
      />
      <path
        d="M-319.17 9.49
             C-319.17,9.49 -319.21,45.48 -319.21,45.48
             C-319.21,45.48 -781.43,45.48 -781.43,45.48
             C-781.43,45.48 -756.06,99.6 -756.06,99.6
             C-756.06,99.6 -781.88,152.15 -781.88,152.15
             C-781.88,152.15 -318.91,152.94 -318.91,152.94
             C-318.91,152.94 -318.81,192.12 -318.81,192.12
             C-318.81,192.12 -191.4,99.22 -191.4,99.22
             C-191.4,99.22 -319.17,9.49 -319.17,9.49z"
        fill="none"
        stroke="#fed65e"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="1"
        style={{
          filter: 'drop-shadow(0 0 2px #fe9e17) drop-shadow(0 0 2px #ff9900)',
        }}
      />
      <text
        x="-535"
        y="110"
        fontSize={arrowTextSize}
        fontFamily="'Josefin Sans', sans-serif"
        fill="#fc5b7c"
        textAnchor="middle"
        style={{
          pointerEvents: 'none',
          textShadow: '0 0 5px #c68697, 0 0 10px #491e27',
          transition: 'all 0.2s ease',
          textAlign: 'center',
        }}
      >
        TA KONTAKT
      </text>
    </svg>
  );
};
