import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Ein Projekt = eine Datei in src/content/projects/. Texte zweisprachig im Frontmatter.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    order: z.number().default(99),
    logo: z.string().optional(),
    status: z.enum(['building', 'beta', 'live']),
    url: z.string().url().optional(),
    role: z.object({ de: z.string(), en: z.string() }),
    tags: z.array(z.string()),
    tagline: z.object({ de: z.string(), en: z.string() }),
    description: z.object({ de: z.string(), en: z.string() }),
  }),
});

export const collections = { projects };
