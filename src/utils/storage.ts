// Local storage utilities
export const storage = {
  get: <T>(key: string, defaultValue: T): T => {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : defaultValue
  },
  
  set: <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value))
  },
  
  remove: (key: string): void => {
    localStorage.removeItem(key)
  }
}