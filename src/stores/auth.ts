import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '@/types'
import { authApi } from '@/services/api/endpoints'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isAuthenticated = ref(false)

  const login = async (email: string, password: string) => {
    const { data } = await authApi.login({ email, password })
    user.value = data.user
    isAuthenticated.value = true
    localStorage.setItem('auth_token', data.token)
  }

  const logout = () => {
    user.value = null
    isAuthenticated.value = false
    localStorage.removeItem('auth_token')
  }

  const checkAuth = async () => {
    try {
      const { data } = await authApi.me()
      user.value = data
      isAuthenticated.value = true
    } catch {
      logout()
    }
  }

  return {
    user,
    isAuthenticated,
    login,
    logout,
    checkAuth
  }
})