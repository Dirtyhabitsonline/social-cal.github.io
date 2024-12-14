import { ref } from 'vue'

interface AsyncState<T> {
  data: T | null
  error: Error | null
  loading: boolean
}

export function useAsync<T>() {
  const state = ref<AsyncState<T>>({
    data: null,
    error: null,
    loading: false
  })

  const execute = async (promise: Promise<T>) => {
    state.value.loading = true
    state.value.error = null
    
    try {
      state.value.data = await promise
      return state.value.data
    } catch (e) {
      state.value.error = e as Error
      throw e
    } finally {
      state.value.loading = false
    }
  }

  return {
    ...state.value,
    execute
  }
}