// Theme utility functions
export const applyTheme = (isDark: boolean) => {
  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export const getSystemTheme = (): boolean => 
  window.matchMedia('(prefers-color-scheme: dark)').matches

export const watchSystemTheme = (callback: (isDark: boolean) => void) => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', e => callback(e.matches))
  return () => mediaQuery.removeEventListener('change', e => callback(e.matches))
}