import { visit } from 'unist-util-visit'
import { SITE } from '../config.ts'

/**
 * Rehype plugin that processes images in markdown content:
 * - Wraps images with alt text in figure/figcaption elements
 * - Adds data-preview attribute for image viewer functionality
 * - Handles multiple images in a single paragraph
 */
export default function rehypeImageProcessor() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'p') {
        return
      }
      if (!parent || typeof index !== 'number') {
        return
      }

      const imgNodes = []
      let hasNonImageContent = false

      for (const child of node.children) {
        if (child.type === 'element' && child.tagName === 'img') {
          imgNodes.push(child)
        } else if (child.type !== 'text' || child.value.trim() !== '') {
          hasNonImageContent = true
        }
      }

      if (hasNonImageContent || imgNodes.length === 0) {
        return
      }

      const newNodes = []

      for (const imgNode of imgNodes) {
        const alt = imgNode.properties?.alt?.trim()

        imgNode.properties = {
          ...imgNode.properties,
          'data-preview': SITE.imageViewer ? 'true' : 'false'
        }

        if (!alt || alt.includes('_')) {
          newNodes.push(imgNode)
          continue
        }

        const figure = {
          type: 'element',
          tagName: 'figure',
          properties: {
            className: ['image-caption-wrapper']
          },
          children: [
            imgNode,
            {
              type: 'element',
              tagName: 'figcaption',
              properties: {
                className: ['img-caption']
              },
              children: [
                {
                  type: 'text',
                  value: alt
                }
              ]
            }
          ]
        }

        newNodes.push(figure)
      }

      if (newNodes.length > 0) {
        parent.children.splice(index, 1, ...newNodes)
        return index + newNodes.length - 1
      }
    })
  }
}
