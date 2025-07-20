// src/components/Navbar.tsx
'use client';
import styled from 'styled-components';

import Link from 'next/link';
import Image from 'next/image';

import { useEffect, useState } from 'react';

const NavbarContainer = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 999;
  display: flex;
  justify-content: center;
  gap: 3rem;
  font-family: sans-serif;
  align-items: center;
  padding: 0 2rem;
  margin-top: 10px;
  transition: background-color 0.3s ease;
  background-color: ${({ $scrolled }) =>
    $scrolled ? 'rgba(0, 0, 0, 0.85)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? 'blur(6px)' : 'none')};
`;

const NavLink = styled(Link)`
  color: #ff4ecb;
  text-decoration: none;
  font-size: 1.5rem;
  letter-spacing: 1px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
    color: #fff;
    text-shadow: 0 0 5px #ff4ecb, 0 0 10px #ff4ecb;
  }
`;

const LogoWrapper = styled.div`
transition: transform 0.2s;
display: flex;

&:hover {
transform: scale(1.05);
filter: drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #ff4ecb);}
`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=> {
    const handleScroll = ()=> {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavbarContainer $scrolled={scrolled}>
      <NavLink href="/">
        <LogoWrapper>
          <Image
            src="/images/icons/fliring-scene-logo-circle.png"
            alt="Fliring Scene Logo"
            width={60}
            height={60}
            priority
            style={{
              paddingTop: '10px',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </LogoWrapper>
      </NavLink>
      <NavLink href="/shows">SHOWS</NavLink>
      <NavLink href="/about">ABOUT</NavLink>
      <NavLink href="/about">GALLERY</NavLink>
      <NavLink href="/contact">CONTACT</NavLink>
    </NavbarContainer>
  );
}
