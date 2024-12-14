import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { API_BASE_URL } from '@/config/constants'

export const createApiClient = (baseURL: string): AxiosInstance => {
  const client = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  client.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('auth_token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => Promise.reject(error)
  )

  client.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        localStorage.removeItem('auth_token')
        window.location.href = '/login'
      }
      return Promise.reject(error)
    }
  )

  return client
}

export const apiClient = createApiClient(API_BASE_URL)