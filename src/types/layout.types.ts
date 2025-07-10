export interface TransitionProps {
  type: 'post' | 'page'
  class?: string
}

export interface LayoutProps extends TransitionProps {
  title?: string
  description?: string
}
