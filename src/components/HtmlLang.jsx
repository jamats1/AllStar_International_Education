"use client";

import { useEffect } from "react";

export default function HtmlLang({ locale }) {
  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-Hans" : "en";
  }, [locale]);
  return null;
}
