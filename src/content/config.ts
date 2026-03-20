import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('FuyouAI'),
    category: z.string().default('AI Productivity'),
    tags: z.array(z.string()).default([]),
    targetKeyword: z.string(),
    canonicalURL: z.string().url(),
    draft: z.boolean().default(false),
    ogImage: z.string().default('/og/default-blog.jpg'),
  }),
});

export const collections = { blog };
