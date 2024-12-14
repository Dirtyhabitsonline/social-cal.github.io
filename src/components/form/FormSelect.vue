<template>
  <div class="form-field">
    <label v-if="label" :for="selectId" class="form-label">{{ label }}</label>
    <select
      :id="selectId"
      :value="modelValue"
      @change="handleChange"
      :class="['form-select', { 'has-error': !!error }]"
    >
      <option v-if="placeholder" value="">{{ placeholder }}</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { generateId } from '@/utils/id'

interface SelectOption {
  value: string | number
  label: string
}

const props = defineProps<{
  modelValue: string | number
  options: SelectOption[]
  label?: string
  placeholder?: string
  error?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const selectId = computed(() => generateId('select'))

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit('update:modelValue', target.value)
}
</script>

<style scoped>
.form-select {
  @apply w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500;
}

.has-error {
  @apply border-red-500 focus:border-red-500 focus:ring-red-500;
}
</style>