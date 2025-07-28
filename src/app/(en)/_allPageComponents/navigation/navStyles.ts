// src/components/navigation/NavBar.styles.ts
import styled from 'styled-components';
import Link from 'next/link';
import { media, logo_size } from '@/styles/breakpoints';
import {
  glowPulse,
  glowPulseFilter,
} from '../animations/glowPulse';

// desktop + mobile container
export const NavbarContainer = styled.nav<{
  $scrolled: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: .5rem 1.5rem;
  z-index: 9996;

  background: ${({ $scrolled }) =>
    $scrolled ? 'rgba(0,0,0,0.9)' : 'transparent'};
  transition: background 0.25s ease;

  @media ${media.tablet} {
  justify-content: center;
  gap: 2rem;
  padding: 1rem 1.5rem;

  }
`;

export const LogoWrapper = styled.div<{
  $open: boolean;
  $size: number;
}>`

  position: relative;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;

  animation: ${glowPulseFilter} 3s ease-in-out infinite;
  transition: transform 0.2s;
  transform: ${({ $open }) =>
    $open ? 'translateY(10px)' : 'translateY(0)'};

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 5px #fff)
      drop-shadow(0 0 10px #ff4ecb);
    text-shadow: 0 0 5px #ff4ecb, 0 0 10px #ff4ecb;
  }
     /* remove the default focus ring */
  &:focus {
    outline: none;
  }
`;

// your animated logo link
export const LogoLink = styled(Link)<{ $open: boolean }>`
  display: flex;
  align-items: center;

  position: ${({ $open }) =>
    $open ? 'fixed' : 'relative'};
  top: ${({ $open }) => ($open ? '33px' : '5px')};
  left: ${({ $open }) => ($open ? '15px' : '0')};

  width: 100%;
  height: 100%;
  animation: ${glowPulseFilter} 3s ease-in-out infinite;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);

  }
 /* remove the default focus ring */
  &:focus {
    outline: none;
  }

  /* ≥375px (mobileM) */
  @media ${media.mobileM} {
    width: ${logo_size.mobileM}px;
    height: ${logo_size.mobileM}px;
  }
  /* ≥425px (mobileL) */
  @media ${media.mobileL} {
    width: ${logo_size.mobileL}px;
    height: ${logo_size.mobileL}px;
  }
  /* ≥768px (tablet) */
  @media ${media.tablet} {
    width: ${logo_size.tablet}px;
    height: ${logo_size.tablet}px;
  }
  /* ≥1024px (laptop) */
  @media ${media.laptop} {
    width: ${logo_size.laptop}px;
    height: ${logo_size.laptop}px;
  }
  /* ≥1280px (desktop) */
  @media ${media.desktop} {
    width: ${logo_size.desktop}px;
    height: ${logo_size.desktop}px;
  }
`;

// the wrapper that shows/hides on mobile
export const Links = styled.div`
  display: none;

  @media ${media.tablet}{
  display: flex;
  align-items: center;
  gap: 2rem;
  }
`;

// desktop text links
export const NavItem = styled(Link)`

  color: #ff4ecb;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 1px;
  transition: transform 0.2s, color 0.2s;

  &:hover {
    transform: scale(1.05);
    color: #00bfff;
  }

  @media ${media.mobileL}{
  font-size: 1.75rem;
  }
  @media ${media.tablet}{
  font-size: 2rem;
  }
`;

/* ____________ MOBILE NAV BAR ONLY _____________ */

export const MenuToggle = styled.button<{ $open: boolean }>`
  position: ${({ $open }) =>
    $open ? 'fixed' : 'relative'};
  top: ${({ $open }) => ($open ? '33px' : '5px')};
  left: ${({ $open }) => ($open ? '80%' : '0')};
  right: ${({ $open }) => ($open ? '0' : '0')};

  z-index: 9999;

  background: transparent;
  color: #ff4ecb;
  font-size: ${({ $open }) => ($open ? '2rem' : '55px')};


@media ${media.mobileM}{
  font-size: ${({ $open }) => ($open ? '2.5rem' : '65px')};
  left: ${({ $open }) => ($open ? '85%' : '0')};
  }
@media ${media.mobileL}{
  font-size: ${({ $open }) => ($open ? '3rem' : '75px')};
  left: ${({ $open }) => ($open ? '90%' : '0')};
  }

  @media ${media.tablet}{
  display: none;
  }
`;

export const DropDownMenu = styled.div<{ $open: boolean }>`
display: ${({ $open }) => ($open ? 'flex' : 'none')};
flex-direction: column;
align-items: start;
justify-content: center;

position: fixed;
top: ${({ $open }) => ($open ? '0px' : '-10px')};
right: ${({ $open }) => ($open ? '-70px' : '0px')};

width: 250px;
height: 290px;

margin: 1rem;
padding: 1rem 2rem;

gap: 2rem;
z-index: 9997;

background: rgba(0, 0, 0, 0.85);
border-radius: 28px;
box-shadow: 0 0 10px #ff4ecb, 0 0 25px #ff4ecb;

animation: ${glowPulse} 2.5s infinite;

a {
color: #ff4ecb;
font - size: 1.5rem;
text - decoration: none;
}

 @media ${media.mobileL}{
 width: 300px;
height: 300px;
top: ${({ $open }) => ($open ? '0px' : '-10px')};
right: ${({ $open }) => ($open ? '-70px' : '0px')};
  }


`;
