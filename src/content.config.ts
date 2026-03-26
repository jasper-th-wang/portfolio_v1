// Import utilities from `astro:content`
import { z } from "astro/zod";
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/data/posts" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()),
  }),
});

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/data/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: image(),
      coverAlt: z.string(),
      github: z.string().optional(),
      devpost: z.string().optional(),
      liveLink: z.string().optional(),
      postLink: z.string().optional(),
      tags: z.array(z.string()),
    }),
});

const aboutSnippetsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/data/aboutSnippets" }),
  schema: z.object({
    title: z.string().optional(),
    organization: z.string().optional(),
    timeline: z.string().optional(),
    order: z.number().optional(),
  }),
});
//
// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
  aboutSnippets: aboutSnippetsCollection,
};
