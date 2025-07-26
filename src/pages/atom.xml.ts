import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { getImage } from 'astro:assets'
import { themeConfig } from '@/config'
import type { APIContext } from 'astro'
import MarkdownIt from 'markdown-it'

// Create markdown-it instance
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})

export async function GET(context: APIContext) {
  const posts = await getCollection('posts')
  const filteredPosts = posts.filter((post) => !post.id.startsWith('_'))
  const sortedPosts = filteredPosts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  )

  const items = await Promise.all(
    sortedPosts.map(async (post) => {
      // Process images in the post
      let content = post.body || ''

      // Find image references in the post
      const imageMatches = content.match(/!\[.*?\]\(([^)]+)\)/g)
      if (imageMatches) {
        for (const match of imageMatches) {
          const srcMatch = match.match(/!\[.*?\]\(([^)]+)\)/)
          if (srcMatch) {
            const originalSrc = srcMatch[1]
            // Try to process image using getImage
            try {
              // Build image path
              const imagePath = originalSrc.startsWith('./')
                ? originalSrc.substring(2)
                : originalSrc.startsWith('_assets/')
                  ? originalSrc
                  : `_assets/${originalSrc}`

              const image = await getImage({
                src: `src/content/posts/${imagePath}`,
                width: 800,
                format: 'webp'
              })

              // Replace image references in Markdown
              const fileName =
                imagePath
                  .split('/')
                  .pop()
                  ?.replace(/\.[^/.]+$/, '') || 'image'
              const siteUrl = (context.site?.toString() || themeConfig.site.website).replace(
                /\/$/,
                ''
              )
              const fullImageUrl = image.src.startsWith('http')
                ? image.src
                : `${siteUrl}${image.src}`
              content = content.replace(
                new RegExp(
                  `!\\[.*?\\]\\(${originalSrc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)`,
                  'g'
                ),
                `![${fileName}](${fullImageUrl})`
              )
            } catch (error) {
              console.warn(`Failed to process image: ${originalSrc}`, error)
            }
          }
        }
      }

      // Convert Markdown to HTML
      const htmlContent = md.render(content)

      return {
        title: post.data.title,
        link: `/${post.id}/`,
        pubDate: post.data.pubDate,
        content: htmlContent
      }
    })
  )

  return rss({
    title: themeConfig.site.title,
    description: themeConfig.site.description,
    site: context.site || themeConfig.site.website,
    items,
    customData: `<language>en-US</language>`,
    stylesheet: false
  })
}
