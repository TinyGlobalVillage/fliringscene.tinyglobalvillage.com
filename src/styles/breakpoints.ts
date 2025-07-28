// src/styles/breakpoints.ts
/**
 * Breakpoint tokens (ascending):
 * mobileXS       – mobile-portrait (iPhone SE, Galaxy Z Fold5 folded) → 320px
 * mobileSM       – mobile (Pixel 7, Galaxy S20/A51…)              → 360px
 * mobile         – mobile (Iphone 14 Pro Max       )              → 430px
 * tabletPortrait – tablet-portrait (iPad mini, Zenbook Fold)      → 768px
 * tablet         – tablet (iPad Pro, Nest Hub Max, Surface Pro 7) → 1024px
 * desktop        – desktop (small laptops)                        → 1280px
 * desktopLg      – desktop-large (wide monitors)                  → 1440px
 */

export const breakpoints = {
  mobileS: 320, // typical height 568
  mobileM: 375, // 667
  mobileL: 425, // 812
  tablet: 768, // 1024
  laptop: 1024, // 768
  desktop: 1280, // 720
} as const;

export type BreakpointKey = keyof typeof breakpoints;

export const media = {
  mobileS: `(min-width: ${breakpoints.mobileS}px)`,
  mobileM: `(min-width: ${breakpoints.mobileM}px)`,
  mobileL: `(min-width: ${breakpoints.mobileL}px)`,
  tablet: `(min-width: ${breakpoints.tablet}px)`,
  laptop: `(min-width: ${breakpoints.laptop}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
};

export const logo_size = {
  mobileS: 50,
  mobileM: 50,
  mobileL: 50,
  tablet: 48,
  laptop: 54,
  desktop: 64,

} as const;

// @media ${media.mobileXS}{
//   }

//   @media ${media.mobileSM}{

//   }

//   @media ${media.mobile}{

//   }

//   @media ${media.tablet}{

//   }

//   @media ${media.tabletPortrait}{

//   }

//   @media ${media.tablet}{

//   }
//   @media ${media.desktop}{

//   }
//   @media ${media.desktopLg}{

//   }
