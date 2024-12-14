<template>
  <div class="space-y-1">
    <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <div class="relative">
      <input
        :id="id"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="[
          baseClasses,
          error ? errorClasses : defaultClasses,
          disabled && 'opacity-50 cursor-not-allowed'
        ]"
        v-bind="$attrs"
      >
    </div>
    <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { InputProps } from '@/types'

const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  placeholder: '',
  disabled: false,
  error: ''
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const id = computed(() => `input-${Math.random().toString(36).slice(2, 11)}`)

const baseClasses = 'block w-full rounded-md shadow-sm text-sm transition-colors'
const defaultClasses = 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
const errorClasses = 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500'
</script>