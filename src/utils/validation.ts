// Form validation utilities
export const required = (value: any): string | true => 
  value ? true : 'This field is required'

export const email = (value: string): string | true => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(value) ? true : 'Invalid email address'
}

export const minLength = (min: number) => 
  (value: string): string | true =>
    value.length >= min ? true : `Must be at least ${min} characters`

export const maxLength = (max: number) => 
  (value: string): string | true =>
    value.length <= max ? true : `Must be no more than ${max} characters`