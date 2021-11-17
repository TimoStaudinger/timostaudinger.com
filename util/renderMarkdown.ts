import {remark} from 'remark'
import remark2rehype from 'remark-rehype'
import behead from 'remark-behead'
import html from 'rehype-stringify'

const renderMarkdown = async (markdown: string) => {
  const result = await remark()
    .use(behead, {after: 0, depth: 1})
    .use(remark2rehype)
    .use(html)
    .process(markdown)
  return result.toString()
}

export default renderMarkdown
