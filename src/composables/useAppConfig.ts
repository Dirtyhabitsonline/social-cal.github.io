import { ref } from 'vue'

export function useAppConfig() {
  const appName = ref('Vue Playground')
  
  return {
    appName
  }
}