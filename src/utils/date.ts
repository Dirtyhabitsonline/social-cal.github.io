// Date formatting utilities
export const formatDate = (date: Date | string, locale = 'en-US'): string => {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(d)
}

export const formatTime = (date: Date | string, locale = 'en-US'): string => {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: 'numeric'
  }).format(d)
}

export const isValidDate = (date: any): boolean => {
  const d = new Date(date)
  return d instanceof Date && !isNaN(d.getTime())
}