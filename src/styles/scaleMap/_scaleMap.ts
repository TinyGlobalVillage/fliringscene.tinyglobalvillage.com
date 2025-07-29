
import { mobileS } from './01_mobileS';
import { mobileM } from './02_mobileM';
import { mobileL } from './03_mobileL';
import { tablet } from './04_tablet';
import { laptop } from './05_laptop';
import { laptopL } from './06_laptopL';
import { fourK } from './07_fourK';


export const scaleMap = {
  mobileS,
  mobileM,
  mobileL,
  tablet,
  laptop,
  laptopL,
  fourK
} as const;

// “ScaleKey” is now exactly the union of your breakpoint names:
export type ScaleKey = keyof typeof scaleMap;

// And “ScaleMap” (optional) is the full type of the object:
export type ScaleMap = typeof scaleMap;
