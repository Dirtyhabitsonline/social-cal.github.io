import { ref } from 'vue'

export interface Notification {
  id: string
  type: 'success' | 'error' | 'info' | 'warning'
  message: string
  duration?: number
}

export function useNotification() {
  const notifications = ref<Notification[]>([])

  const show = (notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).slice(2)
    const duration = notification.duration ?? 3000

    notifications.value.push({ ...notification, id })

    if (duration > 0) {
      setTimeout(() => {
        remove(id)
      }, duration)
    }

    return id
  }

  const remove = (id: string) => {
    notifications.value = notifications.value.filter(n => n.id !== id)
  }

  return {
    notifications,
    show,
    remove
  }
}