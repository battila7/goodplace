import type { ImageMetadata } from "astro"

const decapImages = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/*.{jpeg,jpg,png,gif}')

const Assets = {
    getImage(relativePath: string) {
        return decapImages["/" + relativePath]()
    }
}

export default Assets
