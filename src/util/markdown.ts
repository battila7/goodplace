import {marked} from 'marked'

const Markdown = {
    render(text: string) {
        return marked(text)
    }
}

export default Markdown
