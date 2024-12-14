<template>
  <div class="form-field">
    <label v-if="label" :for="inputId" class="form-label">{{ label }}</label>
    <div class="input-wrapper">
      <input
        :id="inputId"
        :value="modelValue"
        @input="handleInput"
        v-bind="$attrs"
        :class="['form-input', { 'has-error': !!error }]"
      />
      <span v-if="error" class="error-message">{{ error }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { generateId } from '@/utils/id'

const props = defineProps<{
  modelValue: string
  label?: string
  error?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputId = computed(() => generateId('input'))

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<style scoped>
.form-field {
  @apply space-y-1;
}

.form-label {
  @apply block text-sm font-medium text-gray-700 dark:text-gray-300;
}

.form-input {
  @apply w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500;
}

.has-error {
  @apply border-red-500 focus:border-red-500 focus:ring-red-500;
}

.error-message {
  @apply mt-1 text-sm text-red-500;
}
</style>