<template>
  <div
    :class="['notification', type]"
    role="alert"
    @click="$emit('close')"
  >
    <div class="notification-icon">
      <component :is="icon" class="h-5 w-5" />
    </div>
    <div class="notification-content">
      <p class="notification-title">{{ title }}</p>
      <p class="notification-message">{{ message }}</p>
    </div>
    <button class="notification-close" @click.stop="$emit('close')">
      <span class="sr-only">Close</span>
      <XIcon class="h-5 w-5" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { CheckCircleIcon, XCircleIcon, InformationCircleIcon, ExclamationIcon, XIcon } from '@/components/icons'

const props = defineProps<{
  type: 'success' | 'error' | 'info' | 'warning'
  title: string
  message: string
}>()

const icon = computed(() => {
  const icons = {
    success: CheckCircleIcon,
    error: XCircleIcon,
    info: InformationCircleIcon,
    warning: ExclamationIcon
  }
  return icons[props.type]
})

defineEmits<{
  close: []
}>()
</script>

<style scoped>
.notification {
  @apply max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden;
}

.notification-icon {
  @apply flex-shrink-0;
}

.notification-content {
  @apply ml-3 w-0 flex-1 pt-0.5;
}

.notification-title {
  @apply text-sm font-medium text-gray-900;
}

.notification-message {
  @apply mt-1 text-sm text-gray-500;
}

.notification-close {
  @apply ml-4 flex-shrink-0 flex;
}

.success {
  @apply border-l-4 border-green-500;
}

.error {
  @apply border-l-4 border-red-500;
}

.info {
  @apply border-l-4 border-blue-500;
}

.warning {
  @apply border-l-4 border-yellow-500;
}
</style>