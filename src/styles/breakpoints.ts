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
  // smallest mobile typical height 320 x 568

  // dev tools has built in, so go one pixel higher
  mobileS: 320,     // typical height ≤ 568px (e.g. iPhone SE, 320x568)
  mobileM: 375,    // height ≈ 667px (e.g. iPhone 6/7/8)
  mobileL: 425,    // height ≈ 812px (e.g. iPhone X, 11 Pro)
  tablet: 768,    // height ≈ 1024px (e.g. iPad Mini, iPad portrait)
  laptop: 1024,    // height ≈ 1366px (e.g. iPad Pro landscape, small laptops)
  laptopL: 1440,   // height ≥ 900–1080px (HD+ and up)
  fourK: 2560,
} as const;

export type BreakpointKey = keyof typeof breakpoints;

export const media = {
  mobileM: `(min-width: ${breakpoints.mobileM}px)`,
  mobileL: `(min-width: ${breakpoints.mobileL}px)`,
  tablet: `(min-width: ${breakpoints.tablet}px)`,
  laptop: `(min-width: ${breakpoints.laptop}px)`,
  laptopL: `(min-width: ${breakpoints.laptopL}px)`,
  fourK: `(min-width: ${breakpoints.fourK}px)`,
};
