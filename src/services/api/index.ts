import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { API_BASE_URL } from '@/config/constants'
import { handleError, handleRequest, handleResponse } from './interceptors'

export const createApiClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  client.interceptors.request.use(handleRequest)
  client.interceptors.response.use(handleResponse, handleError)

  return client
}