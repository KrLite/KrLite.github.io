import type { TOCItem, ReadingTime } from './content.types'

// TOC component props interface
export interface TOCProps {
  toc?: TOCItem[]
}

// Post layout props interface (generic, not tied to specific data source)
export interface PostLayoutProps {
  title: string
  pubDate: Date
  image?: string
  readingTime?: ReadingTime
  toc?: TOCItem[]
}

// Transition props interface
export interface TransitionProps {
  type: 'post' | 'page'
  class?: string
}

// Layout props interface
export interface LayoutProps extends TransitionProps {
  title?: string
  description?: string
}
