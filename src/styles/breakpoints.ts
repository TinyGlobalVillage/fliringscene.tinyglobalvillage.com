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
  mobileXS:     340,
  mobileSM:     400,
  mobile:       480,
  tabletPortrait: 768,
  tablet:       1024,
  desktop:      1280,
  desktopLg:    1440,
} as const

export const media = {
  mobileXS:      `(max-width: ${breakpoints.mobileXS}px)`,
  mobileSM:      `(max-width: ${breakpoints.mobileSM}px)`,
  mobile:        `(max-width: ${breakpoints.mobile}px)`,
  tabletPortrait:`(max-width: ${breakpoints.tabletPortrait}px)`,
  tablet:        `(max-width: ${breakpoints.tablet}px)`,
  desktop:       `(min-width: ${breakpoints.desktop}px)`,
  desktopLg:     `(min-width: ${breakpoints.desktopLg}px)`,
}

export const logo_size = {
  xs:     50,
  sm:     32,
  mobile: 40,
  tablet: 48,
  desktop: 64,
  lg:     80,
} as const




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
