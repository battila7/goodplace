import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders';

const sightsCollection = defineCollection(
    {
        loader: glob({ pattern: "**/*.md", base: "./src/content/sights" }),
        schema: ({ image }) => z.object({
            title: z.string(),
            link: z.string(),
            image: z.string(),
        })
    }
)

export const collections = {
    sights: sightsCollection
}
