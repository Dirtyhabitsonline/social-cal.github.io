<template>
  <div 
    class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
    :class="[padding && 'p-6']"
  >
    <div v-if="title" class="border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white">
        {{ title }}
      </h3>
    </div>
    <div :class="{ 'px-6 py-4': !padding }">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  padding?: boolean
}>()
</script>