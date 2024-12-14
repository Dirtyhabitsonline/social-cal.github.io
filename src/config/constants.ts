export const APP_NAME = 'Modern Web App'
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

export const STORAGE_KEYS = {
  THEME: 'theme',
  AUTH_TOKEN: 'auth_token'
} as const