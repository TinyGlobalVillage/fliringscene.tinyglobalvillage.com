'use client';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HEIGHT = 75;

const NavbarContainer = styled.nav<{ $scrolled: boolean }>`
  position:fixed;
  inset:0 0 auto 0;
  height:${HEIGHT}px;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:3rem;
  padding:0 2rem;
  z-index:9999;
  background:${p => p.$scrolled ? 'rgba(0,0,0,0.70)' : 'transparent'};
  transition: background .25s ease, backdrop-filter .25s ease;
`;

const NavLink = styled(Link)`
  color:#ff4ecb;
  text-decoration:none;
  font-size:1.5rem;
  letter-spacing:1px;
  transition:transform .2s,color .2s,
  text-shadow .2s;

  &:hover {
  transform:scale(1.05);
  color:#fff;
  text-shadow:0 0 5px #ff4ecb,0 0 10px #ff4ecb; }
`;

const LogoWrapper = styled.div`
  display:flex;
  transition:transform .2s, filter .2s;

  &:hover {
  transform:scale(1.05);
  filter:drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #ff4ecb);
  }
`;

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll(); // set initial state if page loads mid-scroll
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <NavbarContainer $scrolled={scrolled}>
      <NavLink href="/">
        <LogoWrapper>
          <Image src="/images/icons/fliring-scene-logo-circle.png"
            alt="Fliring Scene Logo" width={60} height={60} priority />
        </LogoWrapper>
      </NavLink>
      <NavLink href="/shows">SHOWS</NavLink>
      <NavLink href="/about">ABOUT</NavLink>
      <NavLink href="/gallery">GALLERY</NavLink>
      <NavLink href="/contact">CONTACT</NavLink>
    </NavbarContainer>
  );
}
