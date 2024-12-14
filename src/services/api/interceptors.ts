import type { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { storage } from '@/utils/storage'
import { STORAGE_KEYS } from '@/config/constants'

export const handleRequest = (config: AxiosRequestConfig) => {
  const token = storage.get(STORAGE_KEYS.AUTH_TOKEN, null)
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}

export const handleResponse = (response: AxiosResponse) => response

export const handleError = (error: AxiosError) => {
  if (error.response?.status === 401) {
    storage.remove(STORAGE_KEYS.AUTH_TOKEN)
    window.location.href = '/login'
  }
  return Promise.reject(error)
}