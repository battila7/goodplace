import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders';

function getMarkdownFilesFromContentDir(collection) {
    return glob({
        pattern: "*.md",
        base: `./src/content/${collection}`
    })
}

const additionalPagesCollection = defineCollection(
    {
        loader: getMarkdownFilesFromContentDir("additional-pages"),
        schema: () => z.object({
            title: z.string(),
            subtitle: z.string(),
            coverImage: z.string().nullish(),
        })
    }
)

const sightsCollection = defineCollection(
    {
        loader: getMarkdownFilesFromContentDir("sights"),
        schema: () => z.object({
            title: z.string(),
            link: z.string(),
            image: z.string(),
        })
    }
)

const roomsCollection = defineCollection(
    {
        loader: getMarkdownFilesFromContentDir("rooms"),
        schema: () => z.object({
            title: z.string(),
            gallery: z.array(z.string()),
        })
    }
)

export const collections = {
    additionalPages: additionalPagesCollection,
    sights: sightsCollection,
    rooms: roomsCollection,
}
