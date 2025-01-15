import type { ImageMetadata } from "astro"

const decapImages = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/*.{jpeg,jpg,png,gif}')

const decapSvgs = import.meta.glob<{ default: string }>('/src/assets/images/*.svg', { query: 'raw' })

const Assets = {
    getImage(relativePath: string) {
        return decapImages["/" + relativePath]()
    },
    async getSvg(relativePath: string, options = { addClasses: "", strokeWidth: 2 }) {
        const value = await decapSvgs["/" + relativePath]()

        let svg = value.default
        svg = svg.replace("class=\"", `class="${options.addClasses} `)
        svg = svg.replace("stroke-width=\"2\"", `stroke-width="${options.strokeWidth}"`)

        return svg
    }
}

export default Assets
