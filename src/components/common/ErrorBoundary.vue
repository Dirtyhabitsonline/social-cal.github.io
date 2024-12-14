<template>
  <div v-if="error" class="error-boundary">
    <h2 class="text-xl font-semibold text-red-600">Something went wrong</h2>
    <p class="text-gray-600">{{ error.message }}</p>
    <button 
      @click="resetError" 
      class="mt-4 text-blue-500 hover:text-blue-600"
    >
      Try again
    </button>
  </div>
  <slot v-else />
</template>

<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue'

const error = ref<Error | null>(null)

onErrorCaptured((err) => {
  error.value = err
  return false
})

const resetError = () => {
  error.value = null
}
</script>