import styled from 'styled-components';
import useResponsiveResize from '@/hook-utils/useResponsiveResize';
import { scaleMap } from '@/styles/scaleMap/_scaleMap';
import { glowPulseFilter } from '../animations/glowPulse';


const CurvedArrowWrapper = styled.div`
// animation: ${glowPulseFilter} 2.5s infinite;
// border: 1px solid red;
`;


export default function CurveArrow() {
  const { currentBreakpoint } = useResponsiveResize();

  const { curvedArrowWidth, curvedArrowViewBoxMinX, curvedArrowViewBoxMinY, curvedArrowViewBoxWidth, curvedArrowViewBoxHeight, NeonSubtitleStrokeWidth } = scaleMap[currentBreakpoint];

  return (

    <CurvedArrowWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`${curvedArrowViewBoxMinX} ${curvedArrowViewBoxMinY} ${curvedArrowViewBoxWidth} ${curvedArrowViewBoxHeight}`}
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: curvedArrowWidth,
          overflow: "visible",
          background: "transparent",
        }}
      >
        <path
          d="M 0,0 L 1,84 L 6,116 L 17,153 L 31,184 L 51,216 L 74,244 L 106,273 L 139,295 L 163,307 L 204,321 L 253,328 L 380,326 L 416,329 L 437,335 L 454,343 L 467,352 L 483,368 L 490,378 L 499,399 L 502,412 L 503,445 L 409,447 L 575,648 L 761,446 L 674,445 L 666,443 L 666,416 L 660,376 L 651,346 L 632,306 L 608,272 L 581,244 L 560,227 L 530,208 L 477,186 L 436,177 L 417,175 L 256,176 L 225,169 L 201,156 L 173,128 L 161,107 L 155,90 L 150,53 L 151,0 L 127,1 L 127,69 L 135,107 L 145,129 L 160,151 L 190,178 L 215,191 L 246,199 L 418,199 L 470,209 L 502,221 L 542,244 L 570,267 L 599,300 L 622,339 L 635,375 L 642,415 L 642,468 L 706,470 L 577,611 L 460,471 L 527,470 L 527,431 L 524,400 L 517,378 L 499,349 L 486,336 L 468,323 L 447,313 L 423,306 L 375,302 L 330,302 L 296,305 L 231,302 L 207,297 L 180,288 L 151,274 L 132,262 L 108,243 L 81,215 L 62,189 L 43,153 L 31,118 L 25,84 L 23,44 L 24,0 Z"
          fill="none"
          stroke="#fe9e17"
          strokeWidth={NeonSubtitleStrokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="1"
          style={{
            filter: "drop-shadow(0 0 3px #fe9e17) drop-shadow(0 0 15px #ff9900)",
          }}
        />
        <path
          d="M 0,0 L 1,84 L 6,116 L 17,153 L 31,184 L 51,216 L 74,244 L 106,273 L 139,295 L 163,307 L 204,321 L 253,328 L 380,326 L 416,329 L 437,335 L 454,343 L 467,352 L 483,368 L 490,378 L 499,399 L 502,412 L 503,445 L 409,447 L 575,648 L 761,446 L 674,445 L 666,443 L 666,416 L 660,376 L 651,346 L 632,306 L 608,272 L 581,244 L 560,227 L 530,208 L 477,186 L 436,177 L 417,175 L 256,176 L 225,169 L 201,156 L 173,128 L 161,107 L 155,90 L 150,53 L 151,0 L 127,1 L 127,69 L 135,107 L 145,129 L 160,151 L 190,178 L 215,191 L 246,199 L 418,199 L 470,209 L 502,221 L 542,244 L 570,267 L 599,300 L 622,339 L 635,375 L 642,415 L 642,468 L 706,470 L 577,611 L 460,471 L 527,470 L 527,431 L 524,400 L 517,378 L 499,349 L 486,336 L 468,323 L 447,313 L 423,306 L 375,302 L 330,302 L 296,305 L 231,302 L 207,297 L 180,288 L 151,274 L 132,262 L 108,243 L 81,215 L 62,189 L 43,153 L 31,118 L 25,84 L 23,44 L 24,0 Z"
          fill="none"
          stroke="#fed65e"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="1"
          style={{
            filter: "drop-shadow(0 0 2px #fe9e17) drop-shadow(0 0 2px #ff9900)",
          }}
        />
        <text
          x="350"
          y="260"
          fontSize="1.8rem"
          fontFamily="Arial, sans-serif"
          fill="#fc5b7c"
          textAnchor="middle"
          style={{
            pointerEvents: "none",
            textShadow: "0 0 5px #c68697, 0 0 10px #491e27",
            transition: "all 0.2s ease",
            textAlign: "center",
          }}
        >
          {/* KOMMENDE SHOW */}
        </text>
      </svg>
    </CurvedArrowWrapper>
  );
};
