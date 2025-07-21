'use client';
import styled from 'styled-components';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { media, breakpoints } from '@/styles/breakpoints';


const LOGO_SIZE = { desktop: 70, mobile: 60 };

const NavbarContainer = styled.nav<{ $scrolled: boolean }>`
margin-top: 10px;
position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  gap: 4rem;
  align-items: center;
  z-index: 9999;
  background: ${({ $scrolled }) => ($scrolled ? 'rgba(0,0,0,0.70)' : 'transparent')};
  transition: background 0.25s ease;

  //  @media ${media.mobile} {

  // }

`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  transition: transform 0.2s, filter 0.2s;

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #ff4ecb);
    text-shadow: 0 0 5px #ff4ecb, 0 0 10px #ff4ecb;
    }

   @media ${media.mobile} {
    position: fixed;
    top: 10px;
    left: 10px;
  }
`;

const MenuToggle = styled.button`
  position: fixed;
  top: -8px;
  right: 15px;
  display: none;
  background: transparent;
  border: none;
  color: #ff4ecb;
  font-size: 4rem;
  cursor: pointer;
  align-items: center;

  @media ${media.mobile} {
    display: flex;

  }

  // &:hover {
  //   color: white;
  // }

  // &::after {
  //   content: '▼';
  //   font-size: 1.5rem;
  //   transform: translateY(1px);
  // }
`;

const NavLinks = styled.div<{ $open: boolean }>`
  display: flex;
  gap: 2rem;

  @media ${media.mobile} {
    position: fixed;
    top: 75px;
    margin: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 85%;
    background: rgba(0, 0, 0, 0.85);
    padding: 1rem 2rem;
    transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(-200%)')};
    transition: transform 0.3s ease;
    z-index: 9998;
  }
`;

const NavLink = styled(Link)`
  color: #ff4ecb;
  text-decoration: none;
  font-size: 1.25rem;
  letter-spacing: 1px;
  transition: transform 0.2s, color 0.2s, text-shadow 0.2s;

  &:hover {
    transform: scale(1.05);
    color: #fff;

  }
`;

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogoClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/')
    }
  }

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoSize, setLogoSize] = useState(LOGO_SIZE.desktop);

  // handle scroll → background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // handle resize → logo size
  useEffect(() => {
    const onResize = () => {
      setLogoSize(
        window.innerWidth <= breakpoints.mobile
          ? LOGO_SIZE.mobile
          : LOGO_SIZE.desktop
      );
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <NavbarContainer $scrolled={scrolled}>

      <LogoWrapper onClick={handleLogoClick}>
        <Image
          src="/images/icons/fliring-scene-logo-circle.png"
          alt="Logo"
          width={logoSize}
          height={logoSize}
          priority
        />
      </LogoWrapper>


      <MenuToggle onClick={() => setMenuOpen(v => !v)}>
        {menuOpen ? '✕' : '☰'}
      </MenuToggle>

      <NavLinks $open={menuOpen}>
        <NavLink href="/shows">SHOWS</NavLink>
        <NavLink href="/about">ABOUT</NavLink>
        <NavLink href="/gallery">GALLERY</NavLink>
        <NavLink href="/contact">CONTACT</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
}
