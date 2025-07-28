// src/hook-utils/pickLogoSize.ts
import { breakpoints, logo_size } from '@/styles/breakpoints'

/**
 * Returns the correct logo size for a given viewport width.
 * Mobile-first: we check smallest → largest.
 */
export function pickLogoSize(w: number) {
  if (w < breakpoints.mobileM)       return logo_size.mobileS;
  if (w < breakpoints.mobileL)       return logo_size.mobileM;
  if (w < breakpoints.tablet)        return logo_size.mobileL;
  if (w < breakpoints.laptop)        return logo_size.tablet;
  if (w < breakpoints.desktop)       return logo_size.laptop;
  return logo_size.desktop;
}
