//src/data/i18n/types.ts

import type { ReactNode } from 'react';

//PAGES DICTIONARY DATA

// Final dictionary interface
export interface Dictionary {
  home: HomePage;
  shows: ShowsPage;
  about: AboutPage; // still need to do
  gallery: GalleryPage; // still need to do
  contact: ContactPage; // still need to do
  navigation: NavBarContent;
  footer: FooterContent;
  // Extend with more routes as needed
}

// SEO METADATA TYPES

export type LangParams = Promise<{ lang: 'en' | 'no' }>;

interface PageMeta {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
  twitter?: {
    card?:
      | 'summary'
      | 'summary_large_image'
      | 'player'
      | 'app';
    title?: string;
    description?: string;
    images?:
      | string
      | URL
      | TwitterImage
      | (string | URL | TwitterImage)[];
  };
}

interface TwitterImage {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

// HOME PAGE DATA

// 🆕 Full home structure
interface HomePage extends PageMeta {
  aboveTheFold: AboveTheFoldContent;
  upcomingShows: UpcomingShowsContent;
  // Add other homepage sections like `upcomingShows`, `footer`, etc.
}

// 🆕 New interface for Above the Fold section
interface AboveTheFoldContent {
  title: string;
  subtitle: string;
  ctaLabel: string;
  comedySign: {
    title: string;
    subtitle: string;
  };
}

interface UpcomingShowsContent {
  title: string;
  loadingEvents: string;
  noShowsTitle: string;
  noShowsBody: string;

    };

// SHOW PAGE DATA
interface ShowsPage extends PageMeta {
  showsAboveFold: ShowsAboveFoldContent;
}

interface ShowsAboveFoldContent {
  sectionTitle: string;
}

// ABOUT PAGE DATA

interface AboutPage extends PageMeta {
  aboutAboveFold: AboutContent;
}

export interface AboutContent {
  aboutTitle: string;
  textArray: AboutSectionText[];
}

export interface AboutSectionText {
  id: number;
  text: string;
  alt?: string;
  captions?: string;
}

// GALLERY PAGE DATA

interface GalleryPage extends PageMeta {
  galleryAboveFold: GalleryAboveFoldContent;
}

export interface GalleryAboveFoldContent {
  sectionTitle?: string;
  // now an array of per-slide text, keyed by id:
  prevLabel: string;
  nextLabel: string;
  thumbPrefix: string;
  gallery: Array<{
    id: number;
    caption: string;
    alt: string;
  }>;
}

// CONTACT PAGE DATA
interface ContactPage extends PageMeta {
  contentAboveFold: ContactAboveFoldContent;
}

interface ContactAboveFoldContent {
  form: {
    title: string;
    fields: {
      name: string;
      email: string;
      phone: string;
      topic: string;
      dropdown: {
        placeholder: string;
        option1: string;
        option2: string;
        option3: string;
        option4: string;
        option5: string;
        option6: string;
        variableOption: string;
      };
      videoPrompt: string;
      otherMessage: string;
    };
    button: string;
    statusMessage: {
      success: string;
      error: string;
    };
    errors: ContactFormErrors;
  };
}

interface ContactFormErrors {
  name: string;
  email: string;
  topic: string;
  otherMessage: string;
}

// ALL PAGE COMPONENTS

interface Link {
  label: string;
  ariaLabel: string;
  href: string;
  altText?: string;
  imgSrc?: string; // for static images
  icon?: ReactNode; // for JSX like <FacebookIcon />
}

interface SocialLink extends Link {
  platform: string;
}

// NAVBAR DATA

interface NavBarContent {
  logoAlt: string;
  links: NavLinksContent;
  socialMedia: SocialLink[];
  langToggle: LangToggleContent;
}

interface NavLinksContent {
  home: Link;
  shows: Link;
  about: Link;
  gallery: Link;
  contact: Link;
}

interface LangToggleContent {
  toggleLabel: string;
  enAlt: string;
  noAlt: string;
}

// FOOTER DATA

interface FooterContent {
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
      about: Link;
      gallery: Link;
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
