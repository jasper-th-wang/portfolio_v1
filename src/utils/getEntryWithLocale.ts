import { getEntry, type DataEntryMap } from "astro:content";

export default async function getEntryWithLocale(
  dir: keyof DataEntryMap,
  file: string,
  locale: string,
) {
  if (locale === "en") {
    return await getEntry(dir, file);
  } else {
    return await getEntry(dir, `${locale}/${file}`);
  }
}
