import { getCollection } from "astro:content";

export default async function getCollectionWithLocale(
  collection: string,
  locale: string,
) {
  if (locale === "en") {
    return await getCollection(collection, ({ id }) => {
    return !id.includes("/"); // root level = default lang
    });
  } else {
    return await getCollection(collection, ({ id }) => {
      return id.includes(locale);
    });
  }
}
