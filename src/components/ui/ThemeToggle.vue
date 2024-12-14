<template>
  <button 
    @click="toggleTheme"
    class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
    :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
  >
    <sun-icon v-if="isDark" class="w-5 h-5" />
    <moon-icon v-else class="w-5 h-5" />
  </button>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import { SunIcon, MoonIcon } from '@/components/icons'

const { isDark, toggleTheme } = useTheme()
</script>