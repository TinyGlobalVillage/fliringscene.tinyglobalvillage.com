// helper
import { Dictionary } from './types';
import { dictionary as en } from "@/data/i18n/en";
import { dictionary as no } from "@/data/i18n/no";

export const getDictionary = (lang: string): Dictionary => (lang === 'no' ? no : en);
