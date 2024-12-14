export interface BaseProps {
  class?: string
  style?: string | Record<string, string>
}

export interface ButtonProps extends BaseProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
}