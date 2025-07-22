import { scaleMap, FontSizeKey } from '@/styles/scaleMap';
type BP = FontSizeKey;

// Pick numeric keys of one breakpoint shape
type OneBP = (typeof scaleMap)[BP];
export type NumericProp = {
  [K in keyof OneBP]: OneBP[K] extends number ? K : never
}[keyof OneBP];

const KEY = 'scaleMap-dev';

const read = () =>
  (typeof window !== 'undefined' && JSON.parse(localStorage.getItem(KEY) || '{}')) || {};

export function getNum(bp: BP, prop: NumericProp): number {
  const store = read();
  const overridden = store?.[bp]?.[prop];
  return typeof overridden === 'number' ? overridden : scaleMap[bp][prop];
}

export function setNum(bp: BP, prop: NumericProp, value: number) {
  if (typeof window === 'undefined') return;
  const store = read();
  store[bp] ??= {};
  store[bp][prop] = value;
  localStorage.setItem(KEY, JSON.stringify(store));
}
