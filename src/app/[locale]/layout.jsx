import { notFound } from "next/navigation";
import { LocaleProvider } from "@/context/LocaleContext";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import HtmlLang from "@/components/HtmlLang";

export function generateStaticParams() {
  return [{ locale: "zh" }, { locale: "en" }];
}

export default function LocaleLayout({ children, params }) {
  const { locale } = params;
  if (!isLocale(locale)) {
    notFound();
  }
  const dict = getDictionary(locale);

  return (
    <LocaleProvider locale={locale} dict={dict}>
      <HtmlLang locale={locale} />
      {children}
    </LocaleProvider>
  );
}
