import { ref, readonly } from 'vue'

export function useLoading(initialState = false) {
  const isLoading = ref(initialState)

  const startLoading = () => {
    isLoading.value = true
  }

  const stopLoading = () => {
    isLoading.value = false
  }

  const withLoading = async <T>(promise: Promise<T>): Promise<T> => {
    startLoading()
    try {
      return await promise
    } finally {
      stopLoading()
    }
  }

  return {
    isLoading: readonly(isLoading),
    startLoading,
    stopLoading,
    withLoading
  }
}