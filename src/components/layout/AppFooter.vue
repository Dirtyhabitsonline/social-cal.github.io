<template>
  <footer class="bg-white dark:bg-gray-800 shadow-sm mt-auto">
    <div class="container mx-auto px-4 py-6">
      <div class="flex justify-between items-center">
        <p class="text-gray-600 dark:text-gray-300">
          © {{ currentYear }} {{ appName }}. All rights reserved.
        </p>
        <div class="flex space-x-4">
          <social-link v-for="link in socialLinks" 
                      :key="link.url" 
                      v-bind="link" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SocialLink from '../ui/SocialLink.vue'
import { APP_NAME } from '@/config/constants'

const appName = ref(APP_NAME)
const currentYear = computed(() => new Date().getFullYear())

const socialLinks = ref([
  { url: 'https://twitter.com', icon: 'twitter', label: 'Twitter' },
  { url: 'https://github.com', icon: 'github', label: 'GitHub' }
])</script>