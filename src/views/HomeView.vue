<template>
  <div class="space-y-6">
    <h1 class="text-2xl font-bold">Welcome to {{ appName }}</h1>
    <p class="text-gray-600 dark:text-gray-300">
      Start building your Vue.js application following best practices!
    </p>
  </div>
</template>

<script setup lang="ts">
import { useAppConfig } from '@/composables/useAppConfig'

const { appName } = useAppConfig()
</script>