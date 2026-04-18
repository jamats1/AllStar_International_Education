import { en } from "./dictionaries/en";
import { zh } from "./dictionaries/zh";
import { defaultLocale, isLocale } from "./config";

const dictionaries = { en, zh };

export function getDictionary(locale) {
  const key = isLocale(locale) ? locale : defaultLocale;
  return dictionaries[key];
}
