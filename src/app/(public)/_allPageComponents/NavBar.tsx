// src/components/Navbar.tsx
'use client';
import Link from 'next/link';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: #000;
  padding: 1rem 2rem;
  z-index: 100;
  display: flex;
  justify-content: center;
  gap: 3rem;
  font-family: 'Orbitron', sans-serif;
`;

const NavLink = styled(Link)`
  color: #ff4ecb;
  text-decoration: none;
  font-size: 1.1rem;
  letter-spacing: 1px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
    color: #fff;
    text-shadow: 0 0 5px #ff4ecb, 0 0 10px #ff4ecb;
  }
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/shows">Shows</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/about">Gallery</NavLink>
      <NavLink href="/contact">Contact</NavLink>
    </NavbarContainer>
  );
}
