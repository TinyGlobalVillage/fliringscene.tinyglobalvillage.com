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
import type { Dictionary } from '@/data/i18n/types';
import LangToggle from '../toggle/LangToggle';

type NavBarProps = {
  dict: Dictionary['navigation'];
  lang: string;
};


export default function NavBar({ dict, lang }: NavBarProps) {
  const { currentBreakpoint } = useResponsiveResize();
  const { logo_size } = scaleMap[currentBreakpoint]

  const pathname = usePathname();
  const router = useRouter();

  const langPrefix = lang === 'no' ? '/no' : '/en';

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);



  const toggleMenu = () => setMenuOpen(prev => !prev);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  const handleLogoClick = () => {
    const currentPath = pathname.replace(/\/$/, ''); // remove trailing slash
    const isAtHome = currentPath === `/${lang}`;

    if (isAtHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push(`/${lang}`);
    }
  };

  return (
    <NavbarContainer $scrolled={scrolled}>
      <NavWrapper>

        {!menuOpen &&
          <PulsingWrapper>
            <LogoWrapper $open={menuOpen} $size={logo_size}>
              <LogoLink $open={menuOpen} href={langPrefix} onClick={handleLogoClick}>
                <Image
                  src="/images/icons/fliring-scene-logo-circle.png"
                  alt={dict.logoAlt}
                  width={logo_size}              // ✅ use dynamic size
                  height={logo_size}
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </LogoLink>
            </LogoWrapper>
          </PulsingWrapper>
        }
        {/* ← insert the language toggle here */}
        <MenuToggle $open={menuOpen} onClick={toggleMenu}>

          {menuOpen ? '✕' : '☰'}

        </MenuToggle>


        {/* desktop links */}
        <Links>
          <NavLinks
            dict={dict.links}
            socialMedia={dict.socialMedia}
            lang={lang}
            showHome={false}
          />
          <LangToggle dict={dict.langToggle} />
        </Links>

        {/* mobile dropdown */}
        <DropDownMenu $open={menuOpen}
          onClick={() => setMenuOpen(false)}
        >
          <NavLinks
            dict={dict.links}
            socialMedia={dict.socialMedia}
            lang={lang}
            showHome={true}
          />
          <LangToggle dict={dict.langToggle} />
        </DropDownMenu>
      </NavWrapper>

    </NavbarContainer>
  );
}
