"use client";

import { createContext, useContext, useMemo } from "react";

const LocaleContext = createContext(null);

function getNested(obj, path) {
  return path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
}

export function LocaleProvider({ children, locale, dict }) {
  const value = useMemo(() => {
    function t(key) {
      const v = getNested(dict, key);
      return typeof v === "string" ? v : key;
    }
    function localizePath(path) {
      if (!path) return `/${locale}`;
      if (path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("tel:")) {
        return path;
      }
      const normalized = path.startsWith("/") ? path : `/${path}`;
      if (normalized === "/") return `/${locale}`;
      return `/${locale}${normalized}`;
    }
    return { locale, dict, t, localizePath };
  }, [locale, dict]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
