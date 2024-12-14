<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
    <div class="space-y-4">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
        {{ title }}
      </h3>
      <p class="text-gray-600 dark:text-gray-300">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>