/**
 * Locale-aware money display: RMB prefix for zh, USD prefix for en.
 * Amounts are not converted (placeholder / demo values only).
 */
export function formatMoney(amount, locale) {
  const n = typeof amount === "number" ? amount : Number.parseFloat(String(amount).replace(/[^\d.-]/g, ""));
  if (!Number.isFinite(n)) return String(amount);
  const neg = n < 0;
  const abs = Math.abs(n);
  const formatted = abs.toLocaleString(locale === "zh" ? "zh-CN" : "en-US", {
    minimumFractionDigits: Number.isInteger(abs) ? 0 : 2,
    maximumFractionDigits: 2,
  });
  const sym = locale === "zh" ? "¥" : "$";
  return `${neg ? "-" : ""}${sym}${formatted}`;
}

export function formatMoneyRange(a, b, locale) {
  return `${formatMoney(a, locale)} - ${formatMoney(b, locale)}`;
}
