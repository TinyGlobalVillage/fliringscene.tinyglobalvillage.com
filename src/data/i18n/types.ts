//src/data/i18n/types.ts

import type { ReactNode } from 'react';

// SEO METADATA TYPES

export interface PageMeta {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
  twitter: {
    card:
      | 'summary'
      | 'summary_large_image'
      | 'player'
      | 'app';
    title: string;
    description: string;
    images:
      | string
      | URL
      | TwitterImage
      | (string | URL | TwitterImage)[];
  };
}

export interface TwitterImage {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

//PAGES DICTIONARY DATA

// Final dictionary interface
export interface Dictionary {
  home: HomePage;
  shows: ShowsPage;
  about: PageMeta; // still need to do
  gallery: PageMeta; // still need to do
  contact: PageMeta; // still need to do
  navigation: NavBarContent;
  footer: FooterContent;
  // Extend with more routes as needed
}

// HOME PAGE DATA

// 🆕 Full home structure
export interface HomePage extends PageMeta {
  aboveTheFold: AboveTheFoldContent;
  upcomingShows: UpcomingShowsContent;
  // Add other homepage sections like `upcomingShows`, `footer`, etc.
}

// 🆕 New interface for Above the Fold section
export interface AboveTheFoldContent {
  title: string;
  subtitle: string;
  ctaLabel: string;
}
export interface UpcomingShowsContent {
  title: string;
  ctaLabel: string;
}

// SHOW PAGE DATA
export interface ShowsPage extends PageMeta {
  showsAboveFold: ShowsAboveFoldContent;
}

export interface ShowsAboveFoldContent {
  sectionTitle: string;
}

// ALL PAGE COMPONENTS

export interface Link {
  label: string;
  ariaLabel: string;
  href: string;
  altText?: string;
  imgSrc?: string; // for static images
  icon?: ReactNode; // for JSX like <FacebookIcon />
}

export interface SocialLink extends Link {
  platform: string;
}

// NAVBAR DATA

export interface NavBarContent {
  logoAlt: string;
  links: NavLinksContent;
  socialMedia: SocialLink[];
  langToggle: LangToggleContent;
}

export interface NavLinksContent {
  home: Link;
  shows: Link;
  about: Link;
  gallery: Link;
  contact: Link;
}

export interface LangToggleContent {
  toggleLabel: string;
  enAlt: string;
  noAlt: string;
}

// FOOTER DATA

export interface FooterContent {
  newsletter: {
    title: string;
    formAriaLabelledBy: string;
    subscribe: string;
  };
  input: {
    name: string;
    ariaLabel: string;
    placeholder: string;
  };
  statusMessage: {
    success: string;
    error: string;
    duplicate: string;
  };
  linksColumn: {
    title: string;
    links: {
      shows: Link;
      contact: Link;
    };
  };
  contactColumn: {
    title: string;
    buttonTitle: string;
    buttonAriaLabel: string;
  };
  socialMedia: SocialLink[];
  trademark: {
    title: string;
  };
  advert: {
    message: string;
  };
}

export interface NewsLetterFormContent {
  title: string;
  placeholder: string;
  subscribe: string;
  success: string;
  error: string;
  duplicate: string;
}
