'use client';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { breakpoints } from '@/styles/breakpoints';

const HEIGHT = 75;

const NavbarContainer = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${HEIGHT}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  z-index: 9999;
  background: ${({ $scrolled }) => ($scrolled ? 'rgba(0,0,0,0.70)' : 'transparent')};
  transition: background 0.25s ease;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  transition: transform 0.2s, filter 0.2s;

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #ff4ecb);
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: #ff4ecb;
  font-size: 1.25rem;
  cursor: pointer;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
  }

  &:hover {
    color: white;
  }

  &::after {
    content: '▼';
    font-size: 0.9rem;
    transform: translateY(1px);
  }
`;

const NavLinks = styled.div<{ $open: boolean }>`
  display: flex;
  gap: 2rem;

  @media (max-width: ${breakpoints.mobile}) {
    position: absolute;
    top: ${HEIGHT}px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: center;
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
    text-shadow: 0 0 5px #ff4ecb, 0 0 10px #ff4ecb;
  }
`;

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <NavbarContainer $scrolled={scrolled}>
      <Link href="/">
        <LogoWrapper>
          <Image
            src="/images/icons/fliring-scene-logo-circle.png"
            alt="Logo"
            width={60}
            height={60}
            priority
          />
        </LogoWrapper>
      </Link>

      <MenuToggle onClick={() => setMenuOpen(prev => !prev)}>
        MENU
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
