import { visit } from 'unist-util-visit'

export default function remarkTOC() {
  return function (tree, file) {
    const headings = []
    let headingIndex = 0

    // Extract headings from AST
    visit(tree, 'heading', (node) => {
      const level = node.depth

      // Only process h1, h2, h3
      if (level > 3) return

      // Skip the first h1
      if (level === 1 && headingIndex === 0) {
        headingIndex++
        return
      }

      const text = extractTextContent(node)
      if (!text) return

      const id = `heading-${headingIndex}`

      if (!node.data) node.data = {}
      if (!node.data.hProperties) node.data.hProperties = {}
      node.data.hProperties.id = id

      headings.push({
        level,
        text,
        id,
        index: headingIndex
      })

      headingIndex++
    })

    // Store TOC data in file.data.astro.frontmatter
    if (!file.data.astro) file.data.astro = {}
    if (!file.data.astro.frontmatter) file.data.astro.frontmatter = {}
    file.data.astro.frontmatter.toc = headings
  }
}

function extractTextContent(node) {
  let text = ''

  visit(node, 'text', (textNode) => {
    text += textNode.value
  })

  return text.trim()
}
