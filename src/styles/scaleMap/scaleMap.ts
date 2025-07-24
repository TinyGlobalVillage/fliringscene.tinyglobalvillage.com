import { mobileScales } from "./mobilePages/mobile";
import { tabletScales } from "./tabletPages/tablet";
import { desktopScales } from "./desktopPages/desktop";

export const scaleMap = {
...mobileScales,
...tabletScales,
...desktopScales

} as const;

export type FontSizeKey = keyof typeof scaleMap;
