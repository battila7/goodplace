import type { ImageMetadata } from "astro"

const decapImages = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/*.{jpeg,jpg,png,gif}')

const decapSvgs = import.meta.glob<{ default: string }>('/src/assets/images/*.svg', { query: 'raw' })

const Assets = {
    getImage(relativePath: string) {
        return decapImages["/" + relativePath]()
    },
    async getSvg(relativePath: string) {
        const value = await decapSvgs["/" + relativePath]()

        return value.default
    }
}

export default Assets
