import { getDictionary } from "./get-dictionary";

/** @param {string} key - nested key under pageMeta, e.g. "contact" or "course" */
export function createPageMetadata(key) {
  return async function generateMetadata({ params }) {
    const dict = getDictionary(params.locale);
    const meta = dict.pageMeta?.[key];
    if (!meta) {
      return { title: dict.site?.name ?? "AllStar" };
    }
    return {
      title: meta.title,
      description: meta.description,
    };
  };
}
