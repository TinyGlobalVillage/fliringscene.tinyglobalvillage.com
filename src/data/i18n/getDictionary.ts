// src/data/i18n/getDictionary.ts
import { Dictionary } from './types';
import { dictionary as en } from '@/data/i18n/en';
import { dictionary as no } from '@/data/i18n/no';

export const getDictionary = async (
  lang: string
): Promise<Dictionary> => lang === 'no' ? no : en;
