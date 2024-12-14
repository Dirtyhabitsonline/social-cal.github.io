<template>
  <div 
    :class="[
      'inline-block rounded-full border-4 border-t-blue-600 animate-spin',
      sizeClasses[size]
    ]" 
    role="status"
  >
    <span class="sr-only">Loading...</span>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  size?: 'sm' | 'md' | 'lg'
}>(), {
  size: 'md'
})

const sizeClasses = {
  sm: 'h-4 w-4 border-2',
  md: 'h-8 w-8 border-4',
  lg: 'h-12 w-12 border-4'
}</script>