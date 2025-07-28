// src/components/navigation/NavBar.tsx
'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { pickLogoSize } from '@/hook-utils/pickLogoSize';
import { PulsingWrapper } from '../animations/pulseEffect';
import Image from 'next/image';
import { NavbarContainer, LogoLink, LogoWrapper, Links, MenuToggle, DropDownMenu } from './navStyles';
import NavLinks from './NavLinks';
import { logo_size } from '@/styles/breakpoints';


export default function NavBar() {

  const pathname = usePathname();
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoSize, setLogoSize] = useState<number>(logo_size.mobileS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  useEffect(() => {
    const onResize = () => setLogoSize(pickLogoSize(window.innerWidth));
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
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

      {!menuOpen &&
        <PulsingWrapper>
          <LogoWrapper $open={menuOpen} $size={logoSize}>
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
        <NavLinks showHome={false}/>
      </Links>

      {/* mobile dropdown */}
      <DropDownMenu $open={menuOpen}
      onClick={()=> setMenuOpen(false)}
      >
        <NavLinks showHome={true} />
      </DropDownMenu>

    </NavbarContainer>
  );
}
