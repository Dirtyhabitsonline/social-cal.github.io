<template>
  <nav class="bg-white dark:bg-gray-800 shadow-sm">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <router-link to="/" class="text-xl font-bold">
          {{ appName }}
        </router-link>
        
        <div class="flex items-center space-x-4">
          <nav-link v-for="link in navLinks" 
                    :key="link.to" 
                    :to="link.to">
            {{ link.text }}
          </nav-link>
          <theme-toggle />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavLink from './NavLink.vue'
import ThemeToggle from '../ui/ThemeToggle.vue'
import { APP_NAME } from '@/config/constants'

const appName = ref(APP_NAME)

const navLinks = ref([
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/contact', text: 'Contact' }
])</script>