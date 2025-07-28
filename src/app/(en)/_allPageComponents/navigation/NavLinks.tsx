// src/components/navigation/NavLinks.tsx
'use client';

import React from 'react';
import FacebookIcon from '../facebook/FacebookIcon';
import { NavItem } from './navStyles';

interface NavLink {
  label: string;
  href: string;
  external?: boolean;
  icon?: React.ReactNode;
}

// ─── your links all in one place ──────────────────────────────────────────────
const navLinks: NavLink[] = [
  { label: 'HOME',    href: '/' },
  { label: 'SHOWS',   href: '/shows' },
  { label: 'CONTACT', href: '/contact' },
  {
    label: 'Facebook Icon',
    href: 'https://www.facebook.com/profile.php?id=61577337325283',
    external: true,
    icon: <FacebookIcon />
  }
];

// ─── the NavLinks component ───────────────────────────────────────────────────
export default function NavLinks() {
  return (
    <>
      {navLinks.map(({ label, href, external, icon }) => {
        const props = external
          ? {
              as: 'a' as const,
              href,
              target: '_blank',
              rel: 'noopener noreferrer',
              'aria-label': label
            }
          : { href };

        return (
          <NavItem key={href} {...props}>
            {icon ?? label}
          </NavItem>
        );
      })}
    </>
  );
}
