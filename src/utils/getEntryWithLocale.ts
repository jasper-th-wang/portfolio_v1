import { getEntry } from "astro:content";

export default async function getEntryWithLocale(
  dir: string,
  file: string,
  locale: string,
) {
  if (locale === "en") {
    return await getEntry(dir, file);
  } else {
    return await getEntry(dir, `${locale}/${file}`);
  }
}
