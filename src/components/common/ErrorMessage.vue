<template>
  <div class="error-container" role="alert">
    <div class="error-icon">
      <ExclamationIcon class="h-5 w-5" />
    </div>
    <div class="error-content">
      <h3 v-if="title" class="error-title">{{ title }}</h3>
      <p class="error-message">{{ message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ExclamationIcon } from '@/components/icons'

defineProps<{
  message: string
  title?: string
}>()
</script>

<style scoped>
.error-container {
  @apply rounded-md bg-red-50 p-4 flex;
}

.error-icon {
  @apply flex-shrink-0 text-red-400;
}

.error-content {
  @apply ml-3;
}

.error-title {
  @apply text-sm font-medium text-red-800;
}

.error-message {
  @apply text-sm text-red-700;
}
</style>