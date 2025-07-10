export * from './layout.types'

// Date format types
export type DateFormat =
  | 'YYYY-MM-DD'
  | 'MM-DD-YYYY'
  | 'DD-MM-YYYY'
  | 'MONTH DAY YYYY'
  | 'DAY MONTH YYYY'

// Site configuration type
export interface SiteConfig {
  website: string
  title: string
  author: string
  description: string
  language: string
  contentWidth: string
  centeredLayout: boolean
  favicon: boolean
  footer: boolean
  fadeAnimation: boolean
  dateFormat: DateFormat
  dateSeparator: string
  readingTime: boolean
  imageViewer: boolean
  copyCode: boolean
}
