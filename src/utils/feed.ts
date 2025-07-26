import { getCollection, type CollectionEntry } from 'astro:content'
import { themeConfig } from '@/config'
import type { APIContext } from 'astro'
import MarkdownIt from 'markdown-it'
import { parse } from 'node-html-parser'
import sanitizeHtml from 'sanitize-html'

// Dynamically import all post images
const imageModules = import.meta.glob('/src/content/posts/_assets/*.(jpg|jpeg|png|gif|webp)', {
  eager: true,
  query: '?url',
  import: 'default'
})

// Create image path mapping: filename -> URL
const imagePathMap = new Map<string, string>()
for (const [path, url] of Object.entries(imageModules)) {
  // Extract filename from path
  const fileName = path.split('/').pop() || ''
  imagePathMap.set(fileName, url as string)
}

// Create markdown-it instance with Astro-like configuration
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})

// Custom image renderer to preserve original paths
md.renderer.rules.image = function (tokens, idx) {
  const token = tokens[idx]
  if (!token.attrs) return ''

  const srcIndex = token.attrIndex('src')
  const src = srcIndex >= 0 ? token.attrs[srcIndex][1] : ''
  const altIndex = token.attrIndex('alt')
  const alt = altIndex >= 0 ? token.attrs[altIndex][1] : ''

  return `<img src="${src}" alt="${alt}" />`
}

// Process image paths, convert relative paths to absolute paths
function processImagePaths(html: string, siteUrl: string): string {
  const root = parse(html)

  // Process img tags
  root.querySelectorAll('img').forEach((img) => {
    const src = img.getAttribute('src')
    if (src && !src.startsWith('http') && !src.startsWith('//')) {
      // If it's a relative path, convert to absolute path
      let absoluteSrc: string
      if (src.startsWith('/')) {
        // Absolute path (relative to website root)
        absoluteSrc = `${siteUrl}${src}`
      } else if (src.startsWith('./_assets/')) {
        // Relative path (starting with ./_assets/) - use image mapping
        const fileName = src.substring(2) // Remove ./
        const mappedUrl = imagePathMap.get(fileName.split('/').pop() || '')
        if (mappedUrl) {
          // Ensure mapped URL is absolute
          absoluteSrc = mappedUrl.startsWith('http') ? mappedUrl : `${siteUrl}${mappedUrl}`
        } else {
          // If mapping not found, use original path
          absoluteSrc = `${siteUrl}/${fileName}`
        }
      } else if (src.startsWith('_assets/')) {
        // Relative path (starting with _assets/) - use image mapping
        const fileName = src.split('/').pop() || ''
        const mappedUrl = imagePathMap.get(fileName)
        if (mappedUrl) {
          // Ensure mapped URL is absolute
          absoluteSrc = mappedUrl.startsWith('http') ? mappedUrl : `${siteUrl}${mappedUrl}`
        } else {
          // If mapping not found, use original path
          absoluteSrc = `${siteUrl}/${src}`
        }
      } else if (src.startsWith('./')) {
        // Other relative paths (starting with ./)
        const fileName = src.substring(2) // Remove ./
        absoluteSrc = `${siteUrl}/_assets/${fileName}`
      } else {
        // Other relative paths
        absoluteSrc = `${siteUrl}/_assets/${src}`
      }
      img.setAttribute('src', absoluteSrc)
    }
  })

  return root.toString()
}

// Clean and format HTML
function sanitizeAndFormat(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'p',
      'br',
      'hr',
      'ul',
      'ol',
      'li',
      'blockquote',
      'pre',
      'code',
      'strong',
      'em',
      'del',
      'mark',
      'a',
      'img',
      'table',
      'thead',
      'tbody',
      'tr',
      'th',
      'td',
      'sub',
      'sup',
      'abbr',
      'kbd',
      'div',
      'span'
    ],
    allowedAttributes: {
      '*': ['class', 'id'],
      a: ['href', 'title', 'target', 'rel'],
      img: ['src', 'alt', 'title', 'width', 'height'],
      abbr: ['title'],
      code: ['class'],
      pre: ['class']
    },
    allowedSchemes: ['http', 'https', 'mailto', 'tel'],
    transformTags: {
      a: (tagName: string, attribs: Record<string, string>) => {
        // Ensure external links open in a new window
        if (attribs.href && attribs.href.startsWith('http')) {
          return {
            tagName,
            attribs: {
              ...attribs,
              target: '_blank',
              rel: 'noopener noreferrer'
            }
          }
        }
        return { tagName, attribs }
      }
    }
  })
}

export async function generateRSS(context: APIContext) {
  const posts = await getCollection('posts')
  const filteredPosts = posts.filter((post: CollectionEntry<'posts'>) => !post.id.startsWith('_'))
  const sortedPosts = filteredPosts.sort(
    (a: CollectionEntry<'posts'>, b: CollectionEntry<'posts'>) =>
      b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  )

  // Ensure site URL doesn't end with slash
  const siteUrl = (context.site?.toString() || themeConfig.site.website).replace(/\/$/, '')

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${themeConfig.site.title}</title>
    <link>${siteUrl}</link>
    <description>${themeConfig.site.description}</description>
    <language>zh-CN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${sortedPosts
      .map((post: CollectionEntry<'posts'>) => {
        // Convert Markdown to HTML
        const rawHtml = md.render(post.body || '')

        // Process image paths
        const processedHtml = processImagePaths(rawHtml, siteUrl)
        // Clean and format HTML
        const cleanHtml = sanitizeAndFormat(processedHtml)

        return `
      <item>
        <title><![CDATA[${post.data.title}]]></title>
        <link>${siteUrl}/${post.id}/</link>
        <guid>${siteUrl}/${post.id}/</guid>
        <pubDate>${post.data.pubDate.toUTCString()}</pubDate>
        <content:encoded><![CDATA[${cleanHtml}]]></content:encoded>
      </item>
    `
      })
      .join('')}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  })
}

export async function generateAtom(context: APIContext) {
  const posts = await getCollection('posts')
  const filteredPosts = posts.filter((post: CollectionEntry<'posts'>) => !post.id.startsWith('_'))
  const sortedPosts = filteredPosts.sort(
    (a: CollectionEntry<'posts'>, b: CollectionEntry<'posts'>) =>
      b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  )

  // Ensure site URL doesn't end with slash
  const siteUrl = (context.site?.toString() || themeConfig.site.website).replace(/\/$/, '')

  const atom = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${themeConfig.site.title}</title>
  <subtitle>${themeConfig.site.description}</subtitle>
  <link href="${siteUrl}/atom.xml" rel="self" type="application/atom+xml" />
  <link href="${siteUrl}" />
  <id>${siteUrl}</id>
  <updated>${new Date().toISOString()}</updated>
  ${sortedPosts
    .map((post: CollectionEntry<'posts'>) => {
      // Convert Markdown to HTML
      const rawHtml = md.render(post.body || '')
      // Process image paths
      const processedHtml = processImagePaths(rawHtml, siteUrl)
      // Clean and format HTML
      const cleanHtml = sanitizeAndFormat(processedHtml)

      return `
    <entry>
      <title>${post.data.title}</title>
      <link href="${siteUrl}/${post.id}/" />
      <id>${siteUrl}/${post.id}/</id>
      <published>${post.data.pubDate.toISOString()}</published>
      <content type="html"><![CDATA[${cleanHtml}]]></content>
    </entry>
  `
    })
    .join('')}
</feed>`

  return new Response(atom, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  })
}
