// src/components/navigation/NavLinks.tsx
'use client';

import { NavItem } from './navStyles';
import type { Dictionary } from '@/data/i18n/types';
import { getSocialIcon } from '@/hook-utils/getSocialIcon';

type NavLinkProps = {
  dict: Dictionary['navigation']['links'];
  socialMedia: Dictionary['navigation']['socialMedia'];
  showHome?: boolean;
  lang: string;
}

// ─── the NavLinks component ───────────────────────────────────────────────────
export default function NavLinks({ dict, socialMedia, lang, showHome = true }: NavLinkProps) {
  // convert dict object to array for mapping
  const allNavLinks = Object.entries(dict).map(([key, link]) => ({
    ...link,
    key,
  }));

  return (
    <>
      {/* Navigation Links */}
      {allNavLinks
        .filter(link => showHome || link.key !== 'home')
        .map(({ label, href, ariaLabel }) => (
          <NavItem
            key={href}
            href={`/${lang}${href}`}
            aria-label={ariaLabel}>
            {label}
          </NavItem>
        ))}

      {/* Social Media Links */}
      {socialMedia.map(({ platform, href, ariaLabel, label }) => (
        <NavItem
          key={platform}
          as="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {getSocialIcon(platform) ?? label}

        </NavItem>
      ))}
    </>
  );
}
