<template>
  <header class="bg-white dark:bg-gray-800 shadow-sm">
    <div class="container mx-auto px-4 py-4">
      <nav class="flex justify-between items-center">
        <h1 class="text-xl font-bold">{{ appName }}</h1>
        <theme-toggle />
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useAppConfig } from '@/composables/useAppConfig'
import ThemeToggle from '@/components/ui/ThemeToggle.vue'

const { appName } = useAppConfig()
</script>