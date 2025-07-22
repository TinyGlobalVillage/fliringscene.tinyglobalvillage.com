// src/styles/breakpoints.ts
export const breakpoints = {
  mobile: 480,
  tablet: 768,
  smDesktop: 481,
  desktop: 1024,
};

export const media = {
  mobile: `(max-width: ${breakpoints.mobile}px)`,
  tablet: `(max-width: ${breakpoints.tablet}px)`,
  smDesktop: `(min-width: ${breakpoints.tablet}px)`,
  desktop: `(max-width: ${breakpoints.desktop}px)`,
};
