<template>
  <button
    :class="[
      'inline-flex items-center justify-center rounded-md font-medium transition-colors',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      variantClasses[variant],
      sizeClasses[size],
      disabled && 'opacity-50 cursor-not-allowed',
      loading && 'cursor-wait'
    ]"
    :disabled="disabled || loading"
    v-bind="$attrs"
  >
    <span v-if="loading" class="mr-2">
      <spinner-icon class="w-4 h-4 animate-spin" />
    </span>
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import SpinnerIcon from '@/components/icons/SpinnerIcon.vue'
import type { ButtonProps } from '@/types/components'

withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false
})

const variantClasses = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
  outline: 'border border-gray-300 bg-transparent hover:bg-gray-50 focus:ring-gray-500'
}

const sizeClasses = {
  sm: 'px-2.5 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
}</script>