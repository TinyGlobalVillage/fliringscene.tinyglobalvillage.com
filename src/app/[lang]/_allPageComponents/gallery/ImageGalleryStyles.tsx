'use client';

import styled, { keyframes } from "styled-components";
import { media } from "@/styles/breakpoints";

type AnimationKey = keyof typeof animationMap;

export const animationMap = {
  slideInLeft: keyframes`
    from { transform: translateX(-100%); opacity: 0.7; }
    to   { transform: translateX(0); opacity: 1; }
  `,
  slideInRight: keyframes`
    from { transform: translateX(100%); opacity: 0.7; }
    to   { transform: translateX(0); opacity: 1; }
  `,
  slideOutLeft: keyframes`
    from { transform: translateX(0); opacity: 1; }
    to   { transform: translateX(-100%); opacity: 0; }
  `,
  slideOutRight: keyframes`
    from { transform: translateX(0); opacity: 1; }
    to   { transform: translateX(100%); opacity: 0; }
  `
};

// ── Styled Components ─────────────────────────────
export const ImageGalleryWrapper = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Slider = styled.div`
  position: relative;
  overflow: visible;
  border-radius: 1rem;
`;

export const SlideContainer = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;             /* clip image & overlay to the corners */
  box-shadow:
    0 0 10px #fe9e17,
    0 0 20px #fe9e17,
    0 0 30px #fe9e17;
`;

export const MainImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
`;


export const MainImage = styled.img<{ $animation: AnimationKey }>`
  position: absolute;
  max-width: 97%;
  max-height: 65vh;
  width: auto;
  height: auto;
  border-radius: 0.75rem 0.75rem 0 0;
  object-fit: contain;
  animation: ${({ $animation }) => animationMap[$animation]} 0.5s ease;
  opacity: 1;

`;

export const ZoomOverlay = styled.div`
  position: fixed;
  inset: 0;                           /* top:0; left:0; right:0; bottom:0 */
  background: rgba(0,0,0,0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;                   /* indicates “click to close” */
  z-index: 10000;                     /* above everything else */

  img {
    max-width: 100vw;
    max-height: 100vh;
    object-fit: contain;
  }
`;

export const ZoomContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 95vw;
  max-height: 95vh;
  overflow: auto;           /* scroll if caption overflows */
  padding: 1rem;
  background: #000;         /* optional inner background */
  border-radius: 0.5rem;
`;

export const CaptionZoom = styled.span`
  color: white;
  font-size: 1.1rem;
  text-align: center;
  line-height: 1.4;
`;


export const Overlay = styled.div<{ $hasCaption: boolean }>`
  width: 97%;
  margin: 0 auto;
  margin-top: -5px;
  margin-bottom: 5px;
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: ${({ $hasCaption }) => $hasCaption ? 'center' : 'space-between'};

  /* a little padding, and a semi-opaque background */
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.6);
  // background: rgba(236, 230, 230, 0.6);

  /* match your image’s bottom corners */
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.5);
`;

// new Caption element for styling the text
export const Caption = styled.span`
  flex: 1;
  text-align: center;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  margin: 0 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NavButton = styled.button`
  position: relative;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid #fe9e17;
  font-size: 2.5rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  filter: drop-shadow(0 0 3px #fe9e17);

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    filter: drop-shadow(0 0 15px #fe9e17);
  }
  @media ${media.tablet}{
  }
`;

export const NavButtonLeft = styled(NavButton)`
bottom: -.5em;
`;
export const NavButtonRight = styled(NavButton)`
bottom: -.5em;
`;

export const ThumbnailRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const Thumbnail = styled.img<{ $active: boolean }>`
  width: 80px;
  height: 60px;
  object-fit: cover;
  border: 2px solid ${({ $active }) => ($active ? '#f7b700' : 'transparent')};
  border-radius: 6px;
  cursor: pointer;
  transition: border 0.2s;

  &:hover {
    border-color: #f7b700;
  }
`;
