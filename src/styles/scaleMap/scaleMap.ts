import { mobileScale } from "./mobilePages/mobile";
import { tabletScale } from "./tabletPages/tablet";
import { desktopScales } from "./desktopPages/desktop";

export const scaleMap = {
...mobileScale,
...tabletScale,
...desktopScales

} as const;

export type FontSizeKey = keyof typeof scaleMap;
