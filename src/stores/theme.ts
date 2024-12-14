import { defineStore } from 'pinia'
import { ref } from 'vue'
import { storage } from '@/utils/storage'
import { applyTheme, getSystemTheme } from '@/utils/theme'
import { STORAGE_KEYS } from '@/config/constants'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(storage.get(STORAGE_KEYS.THEME, getSystemTheme()))

  const setTheme = (dark: boolean) => {
    isDark.value = dark
    applyTheme(dark)
    storage.set(STORAGE_KEYS.THEME, dark)
  }

  const toggleTheme = () => setTheme(!isDark.value)

  return {
    isDark,
    setTheme,
    toggleTheme
  }
})