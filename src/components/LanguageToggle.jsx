"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales } from "@/i18n/config";
import { useLocale } from "@/context/LocaleContext";

export default function LanguageToggle() {
  const { locale, t } = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const activeLocale = locale || "en";

  const pathWithoutLocale =
    pathname.replace(new RegExp(`^/(${locales.join("|")})(?=/|$)`), "") || "/";

  const go = (nextLocale) => {
    const suffix = pathWithoutLocale === "/" ? "" : pathWithoutLocale;
    router.push(`/${nextLocale}${suffix}`);
  };

  return (
    <div
      className='language-toggle flex-align p-4 bg-main-25 border border-neutral-30 rounded-pill gap-0 shadow-sm'
      role='group'
      aria-label={t("language.toggleLabel")}
    >
      <button
        type='button'
        onClick={() => go("zh")}
        className={`language-toggle__btn px-16 py-8 rounded-pill text-sm fw-semibold transition-1 border-0 ${
          activeLocale === "zh"
            ? "bg-main-600 text-white shadow-sm"
            : "bg-transparent text-neutral-600 hover-text-main-600"
        }`}
        aria-pressed={activeLocale === "zh"}
        aria-label={t("language.zhAria")}
      >
        {t("language.zhShort")}
      </button>
      <button
        type='button'
        onClick={() => go("en")}
        className={`language-toggle__btn px-16 py-8 rounded-pill text-sm fw-semibold transition-1 border-0 ${
          activeLocale === "en"
            ? "bg-main-600 text-white shadow-sm"
            : "bg-transparent text-neutral-600 hover-text-main-600"
        }`}
        aria-pressed={activeLocale === "en"}
        aria-label={t("language.enAria")}
      >
        {t("language.enShort")}
      </button>
    </div>
  );
}
