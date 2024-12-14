import { ref, watch, onMounted, onUnmounted } from 'vue'
import { storage } from '@/utils/storage'
import { applyTheme, getSystemTheme, watchSystemTheme } from '@/utils/theme'
import { STORAGE_KEYS } from '@/config/constants'

export function useTheme() {
  const isDark = ref(storage.get(STORAGE_KEYS.THEME, getSystemTheme()))

  // Watch for theme changes and apply them
  watch(isDark, (value) => {
    applyTheme(value)
    storage.set(STORAGE_KEYS.THEME, value)
  }, { immediate: true })

  // Watch system theme changes
  onMounted(() => {
    const cleanup = watchSystemTheme((systemIsDark) => {
      if (!storage.get(STORAGE_KEYS.THEME, null)) {
        isDark.value = systemIsDark
      }
    })
    
    onUnmounted(cleanup)
  })

  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  return {
    isDark,
    toggleTheme
  }
}