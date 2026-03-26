import { getCollection, type CollectionKey } from "astro:content";

export default async function getCollectionWithLocale<T extends CollectionKey>(
  collection: T,
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
