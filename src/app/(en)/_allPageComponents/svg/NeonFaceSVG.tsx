'use client';

import useResponsiveResize from '@/hook-utils/useResponsiveResize';
import { scaleMap } from '@/styles/scaleMap/_scaleMap';
import SvgWrapper from './SvgWrapper';


const NeonFaceSVG = () => {
  const { currentBreakpoint } = useResponsiveResize();
  const { faceWidth, faceViewBoxMinX, faceViewBoxMinY, faceViewBoxWidth, faceViewBoxHeight } = scaleMap[currentBreakpoint];

  return (
    <SvgWrapper $width={faceWidth}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`${faceViewBoxMinX} ${faceViewBoxMinY} ${faceViewBoxWidth} ${faceViewBoxHeight}`}
        preserveAspectRatio="xMidYMid meet"
        style={{
          // width: faceWidth,
          // height: 'auto',
          overflow: 'visible',
        }}
      >
        <g transform="translate(156, 346)" style={{ filter: 'drop-shadow(0 0 3px #fe9e17) drop-shadow(0 0 15px #ff9900)' }}>
          {/* Orange Face Glow */}
          <path
            d="M310.28 -286.07C404.86 -286.07 481.65 -209.28 481.65 -114.7C481.65 -20.12 404.86 56.67 310.28 56.67C215.71 56.67 138.92 -20.12 138.92 -114.7C138.92 -209.28 215.71 -286.07 310.28 -286.07Z"
            stroke="#fe9e17"
            strokeWidth="11"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M191.2 -122.35C191.2 -122.35 184.56 -19.08 280.47 5.63C382.23 31.85 424.06 -73.65 422.81 -86.76C420.94 -86.14 355.39 -63.66 295.46 -73.65C235.52 -83.64 191.2 -122.35 191.2 -122.35Z"
            stroke="#fe9e17"
            strokeWidth="11"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M214.3 -159.8C214.3 -159.8 223.02 -198.51 247.39 -199.13C271.74 -199.76 276.11 -174.79 274.86 -150.44"
            stroke="#fe9e17"
            strokeWidth="11"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M341.3 -144.8C341.3 -144.8 350.02 -183.51 374.39 -184.13C398.74 -184.76 403.11 -159.79 401.86 -135.44"
            stroke="#fe9e17"
            strokeWidth="11"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g transform="translate(156, 346)" style={{ filter: 'drop-shadow(0 0 3px #f8e160) drop-shadow(0 0 15px #fe9e17)' }}>
          {/* Yellow Accent Glow */}
          <path
            d="M310.28 -286.07C404.86 -286.07 481.65 -209.28 481.65 -114.7C481.65 -20.12 404.86 56.67 310.28 56.67C215.71 56.67 138.92 -20.12 138.92 -114.7C138.92 -209.28 215.71 -286.07 310.28 -286.07Z"
            stroke="#f8e160"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M191.2 -122.35C191.2 -122.35 184.56 -19.08 280.47 5.63C382.23 31.85 424.06 -73.65 422.81 -86.76C420.94 -86.14 355.39 -63.66 295.46 -73.65C235.52 -83.64 191.2 -122.35 191.2 -122.35Z"
            stroke="#f8e160"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M214.3 -159.8C214.3 -159.8 223.02 -198.51 247.39 -199.13C271.74 -199.76 276.11 -174.79 274.86 -150.44"
            stroke="#f8e160"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M341.3 -144.8C341.3 -144.8 350.02 -183.51 374.39 -184.13C398.74 -184.76 403.11 -159.79 401.86 -135.44"
            stroke="#f8e160"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <g transform="translate(156, 346)" style={{ filter: 'drop-shadow(0 0 3px #98ffff) drop-shadow(0 0 15px #22bef5)' }}>
          {/* Blue Accent Strokes */}
          <path
            d="M456.31 30.33C456.31 30.33 504.75 67.12 504.75 67.12"
            stroke="#22bef5"
            strokeWidth="11"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M128.9 9.8C128.9 9.8 90.22 41.04 90.22 41.04"
            stroke="#22bef5"
            strokeWidth="11"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M126.13 -213.28C126.13 -213.28 89.11 -228.1 89.11 -228.1"
            stroke="#22bef5"
            strokeWidth="11"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M154.43 -252.68C154.43 -252.68 120.74 -291.36 120.74 -291.36"
            stroke="#22bef5"
            strokeWidth="11"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M456.31 30.33C456.31 30.33 504.75 67.12 504.75 67.12"
            stroke="#98ffff"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M128.9 9.8C128.9 9.8 90.22 41.04 90.22 41.04"
            stroke="#98ffff"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M126.13 -213.28C126.13 -213.28 89.11 -228.1 89.11 -228.1"
            stroke="#98ffff"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M154.43 -252.68C154.43 -252.68 120.74 -291.36 120.74 -291.36"
            stroke="#98ffff"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </SvgWrapper>
  );
};

export default NeonFaceSVG;
