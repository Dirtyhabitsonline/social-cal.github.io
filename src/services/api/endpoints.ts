import { apiClient } from './client'
import type { User, LoginCredentials, RegisterData } from '@/types'

export const authApi = {
  login: (credentials: LoginCredentials) => 
    apiClient.post<{ token: string, user: User }>('/auth/login', credentials),
    
  register: (data: RegisterData) => 
    apiClient.post<{ token: string, user: User }>('/auth/register', data),
    
  me: () => 
    apiClient.get<User>('/auth/me')
}

export const userApi = {
  getProfile: () => 
    apiClient.get<User>('/users/profile'),
    
  updateProfile: (data: Partial<User>) => 
    apiClient.patch<User>('/users/profile', data)
}