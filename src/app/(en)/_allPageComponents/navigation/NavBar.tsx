// src/components/navigation/NavBar.tsx
'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { PulsingWrapper } from '../animations/pulseEffect';
import Image from 'next/image';
import { NavbarContainer, NavWrapper, LogoLink, LogoWrapper, Links, MenuToggle, DropDownMenu } from './navStyles';
import NavLinks from './NavLinks';
import useResponsiveResize from '@/hook-utils/useResponsiveResize';
import { scaleMap } from '@/styles/scaleMap/_scaleMap';


export default function NavBar() {
  const { currentBreakpoint } = useResponsiveResize();
  const { logo_size } = scaleMap[currentBreakpoint]

  const pathname = usePathname();
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  const handleLogoClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  return (
    <NavbarContainer $scrolled={scrolled}>
      <NavWrapper>

        {!menuOpen &&
          <PulsingWrapper>
            <LogoWrapper $open={menuOpen} $size={logo_size}>
              <LogoLink $open={menuOpen} href="/" onClick={handleLogoClick}>
                <Image
                  src="/images/icons/fliring-scene-logo-circle.png"
                  alt="FliringLogo"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </LogoLink>
            </LogoWrapper>
          </PulsingWrapper>
        }

        <MenuToggle $open={menuOpen} onClick={() => setMenuOpen(v => !v)}>

          {menuOpen ? '✕' : '☰'}

        </MenuToggle>


        {/* desktop links */}
        <Links>
          <NavLinks showHome={false} />
        </Links>

        {/* mobile dropdown */}
        <DropDownMenu $open={menuOpen}
          onClick={() => setMenuOpen(false)}
        >
          <NavLinks showHome={true} />
        </DropDownMenu>
      </NavWrapper>

    </NavbarContainer>
  );
}
