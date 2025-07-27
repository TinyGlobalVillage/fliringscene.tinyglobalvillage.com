'use client';
import styled from 'styled-components';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { media, logo_size } from '@/styles/breakpoints';
import { glowPulse, glowPulseFilter } from '../_nonComponentHelpers/animations/glowPulse';
import FacebookIcon from '../facebook/FacebookIcon';
import { PulsingWrapper } from '../animations/pulseEffect';
 import pickLogoSize from '@/hook-utils/pickLogoSize';

// Parent Container
const NavbarContainer = styled.nav<{ $scrolled: boolean }>`
position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px 0px;
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  z-index: 9999;
  background: ${({ $scrolled }) => ($scrolled ? 'rgba(0,0,0,0.7)' : 'transparent')};
  transition: background 0.25s ease;

    @media ${media.mobile} {
    width: 100%;
    padding: 5px 15px;
    justify-content: space-between;
    background: none;
  }

  `

const StyledLogoLink = styled(Link)<{ $menuOpen: boolean }>`
  display: flex;
  align-items: center;
  transition: transform 0.2s;
  animation: ${glowPulseFilter} 3s ease-in-out infinite;
  transform-origin: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #ff4ecb);
    text-shadow: 0 0 5px #ff4ecb, 0 0 10px #ff4ecb;
  }


`;

const MenuToggle = styled.button<{ $open: boolean }>`
  display: none;
  position:  ${({ $open }) => ($open ? 'fixed' : 'none')};
   top: ${({ $open }) => ($open ? '33px' : 'none')};
  right: ${({ $open }) => ($open ? '15px' : 'none')};
  background: transparent;
  border: none;
  color: #ff4ecb;
  font-size: ${({$open}) => $open ? '2rem': '4rem'};
  cursor: pointer;
  align-items: center;
  z-index: 9999;
  justify-content: center;


  @media ${media.mobile} {
    display: flex;
  }
`;

const NavLinks = styled.div<{ $open: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media ${media.mobile} {
    position: fixed;
    top: 3px;
    left: 115px;
    width: 250px;
    height: 290px;
    margin: 1rem;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    background: rgba(0, 0, 0, 0.85);
    // border: 8px solid #ff4ecb;
    border-radius: 28px;
    animation: ${glowPulse} 2.5s infinite;
    box-shadow: 0 0 10px #ff4ecb, 0 0 25px #ff4ecb;
    padding: 1rem 2rem;
    transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(-200%)')};
    transition: transform 0.3s ease;
    z-index: 9995;
  }


`;

const NavLink = styled(Link)`
  color: #ff4ecb;
  text-decoration: none;
  font-size: 1.25rem;
  letter-spacing: 1px;
  // drop-shadow: 0 0 10px #ff4ecb, 0 0 25px #ff4ecb;

  transition: transform 0.2s, color 0.2s, text-shadow 0.2s;

  &:hover {
    transform: scale(1.05);
    color: #00bfff;

  }
`;
const MobileOnlyNavLink = styled(NavLink)`
  display: none;

  @media ${media.mobile} {
    display: inline-block;
  }
`;

const IconLink = styled.a`
  color: #ff4ecb;

  &:hover {
    color: #00bfff;          
  }
`;

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogoClick = () => {
    setMenuOpen(false);
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/')
    }
  }

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoSize, setLogoSize] = useState<number>(logo_size.desktop);

  // handle scroll → background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  // handle resize → logo size
  useEffect(() => {
    const onResize = ()=> {
      const w = window.innerWidth
      setLogoSize (pickLogoSize(w))
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <NavbarContainer $scrolled={scrolled}>

        <PulsingWrapper>
          <StyledLogoLink href="/" $menuOpen={menuOpen} onClick={handleLogoClick}>
            <Image
              src="/images/icons/fliring-scene-logo-circle.png"
              alt="Logo"
              width={logoSize}
              height={logoSize}
              priority
            />
          </StyledLogoLink>
        </PulsingWrapper>


      <MenuToggle $open={menuOpen} onClick={() => setMenuOpen(v => !v)}>
        {menuOpen ? '✕' : '☰'}
      </MenuToggle>

      <NavLinks $open={menuOpen}>
        <MobileOnlyNavLink href="/" onClick={() => setMenuOpen(false)}>HOME</MobileOnlyNavLink>
        <NavLink href="/shows" onClick={() => setMenuOpen(false)}>SHOWS</NavLink>
        {/* <NavLink href="/about" onClick={() => setMenuOpen(false)}>ABOUT</NavLink>
        <NavLink href="/gallery" onClick={() => setMenuOpen(false)}>GALLERY</NavLink> */}
        <NavLink href="/contact" onClick={() => setMenuOpen(false)}>CONTACT</NavLink>
        <IconLink
          href="https://www.facebook.com/profile.php?id=61577337325283"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FacebookIcon />
        </IconLink>
      </NavLinks>
    </NavbarContainer>
  );
}
