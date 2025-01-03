import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    isDraft: z.boolean().optional().default(false),
    title: z.string(),
    pubDate: z.date(),
    menu: z.enum(["tech", "reflection", "note", "log"]),
    description: z.string().optional().default(""),
    comment: z.boolean().optional().default(false),
  }),
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./data/posts" }),
});

export const collections = {
  posts,
};
