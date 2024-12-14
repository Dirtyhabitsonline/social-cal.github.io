<template>
  <router-link 
    :to="to"
    class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    :class="{ 'text-blue-600 dark:text-blue-400': isActive }"
  >
    <slot />
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  to: string
}>()

const route = useRoute()
const isActive = computed(() => route.path === props.to)
</script>