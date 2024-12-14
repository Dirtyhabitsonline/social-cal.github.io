<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <app-header />
    <main class="container mx-auto px-4 py-8">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
</script>