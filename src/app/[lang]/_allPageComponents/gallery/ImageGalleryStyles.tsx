'use client';

import styled, {keyframes} from "styled-components";


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
export const GalleryWrapper = styled.div`
  max-width: 900px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Slider = styled.div`
  position: relative;
  overflow: visible;
  border-radius: 1rem;
`;

export const MainImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  padding: 0.5rem;
  border-radius: 1rem;
`;

export const MainImage = styled.img<{ $animation: AnimationKey }>`
  position: absolute;
  max-width: 100%;
  max-height: 65vh;
  width: auto;
  height: auto;
  border-radius: 0.75rem;
  object-fit: contain;
  animation: ${({ $animation }) => animationMap[$animation]} 0.5s ease;
  opacity: 1;
  box-shadow:
    0 0 10px #fe9e17,
    0 0 20px #fe9e17,
    0 0 30px #fe9e17;
`;

export const Overlay = styled.div`
 text-align: center;
  margin-top: -2rem;
  padding: 0.5rem 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border-radius: 0.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid #fe9e17;
  font-size: 2.5rem;
  cursor: pointer;
  width: 48px;
  height: 48px;
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
`;

export const NavButtonLeft = styled(NavButton)` left: 1rem; `;
export const NavButtonRight = styled(NavButton)` right: 1rem; `;

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
