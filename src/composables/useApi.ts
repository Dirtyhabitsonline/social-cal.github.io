import { ref } from 'vue'
import type { ApiResponse } from '@/types/api'
import { createApiClient } from '@/services/api'

export function useApi<T>(endpoint: string) {
  const data = ref<T | null>(null)
  const error = ref<Error | null>(null)
  const loading = ref(false)

  const api = createApiClient()

  const fetchData = async () => {
    loading.value = true
    try {
      const response = await api.get<ApiResponse<T>>(endpoint)
      data.value = response.data.data
    } catch (e) {
      error.value = e as Error
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    error,
    loading,
    fetchData
  }
}