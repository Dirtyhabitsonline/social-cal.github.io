<template>
  <a
    :href="url"
    :aria-label="label"
    target="_blank"
    rel="noopener noreferrer"
    class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
  >
    <component :is="iconComponent" class="w-5 h-5" />
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { TwitterIcon, GithubIcon } from '@/components/icons'

const props = defineProps<{
  url: string
  icon: string
  label: string
}>()

const iconComponent = computed(() => {
  const icons: Record<string, any> = {
    twitter: TwitterIcon,
    github: GithubIcon
  }
  return icons[props.icon]
})
</script>