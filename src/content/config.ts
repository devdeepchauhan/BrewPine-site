import { z, defineCollection } from 'astro:content';

// --- Journal / Devlog ---
const journalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    date:        z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category:    z.enum([
      'Studio News',
      'Development Log',
      'Game Development',
      'Programming',
      'Engine Experiments',
      'Tutorial',
      'Art & Design',
      'Announcement',
    ]),
    tags:        z.array(z.string()).default([]),
    cover:       z.string().optional(),
    draft:       z.boolean().default(false),
  }),
});

// --- Games ---
const gamesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    genre:       z.string(),
    status:      z.enum(['Prototype', 'In Development', 'Released', 'Archived']),
    cover:       z.string().optional(),
    itchUrl:     z.string().url().optional(),
    trailerUrl:  z.string().optional(),  // YouTube video ID or full URL
    screenshots: z.array(z.string()).default([]),
    releaseDate: z.coerce.date().optional(),
    credits:     z.array(z.object({ name: z.string(), role: z.string() })).default([]),
    relatedPosts:z.array(z.string()).default([]),
    draft:       z.boolean().default(false),
  }),
});

// --- Videos ---
const videosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    category:    z.enum(['Devlog', 'Tutorial', 'Game Mechanics', 'Engine Dev', 'Behind the Scenes', 'Experiment']),
    youtubeId:   z.string(),
    thumbnail:   z.string().optional(),
    date:        z.coerce.date(),
    draft:       z.boolean().default(false),
  }),
});

// --- Team ---
const teamCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name:     z.string(),
    role:     z.string(),
    avatar:   z.string().optional(),
    bio:      z.string(),
    skills:   z.array(z.string()).default([]),
    social:   z.object({
      github:    z.string().optional(),
      itchio:    z.string().optional(),
      twitter:   z.string().optional(),
      portfolio: z.string().optional(),
    }).default({}),
    founder:  z.boolean().default(false),
    hidden:   z.boolean().default(false),  // set true to hide incomplete profiles
    order:    z.number().default(99),
  }),
});

// --- Projects (Currently Brewing) ---
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    status:      z.enum(['Prototype', 'In Development', 'Released', 'Archived']),
    cover:       z.string().optional(),
    link:        z.string().optional(),
    startDate:   z.coerce.date().optional(),
    featured:    z.boolean().default(false),
  }),
});

export const collections = {
  journal:  journalCollection,
  games:    gamesCollection,
  videos:   videosCollection,
  team:     teamCollection,
  projects: projectsCollection,
};
