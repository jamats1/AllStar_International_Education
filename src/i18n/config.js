export const locales = ["en", "zh"];
export const defaultLocale = "zh";

export function isLocale(value) {
  return locales.includes(value);
}
