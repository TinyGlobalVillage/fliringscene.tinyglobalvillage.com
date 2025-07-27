import { logo_size, breakpoints } from "@/styles/breakpoints"

export default function pickLogoSize(w: number) {
  if (w <= breakpoints.mobileXS)       return logo_size.xs
  if (w <= breakpoints.mobileSM)       return logo_size.sm
  if (w <= breakpoints.mobile)         return logo_size.mobile
  if (w <= breakpoints.tabletPortrait) return logo_size.tablet
  if (w <= breakpoints.tablet)         return logo_size.tablet
  if (w <  breakpoints.desktopLg)      return logo_size.desktop
  return logo_size.lg
};
