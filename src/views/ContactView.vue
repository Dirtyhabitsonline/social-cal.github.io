<template>
  <div class="max-w-2xl mx-auto space-y-8">
    <header class="text-center">
      <h1 class="text-4xl font-bold mb-4">Contact Us</h1>
      <p class="text-xl text-gray-600 dark:text-gray-300">
        Get in touch with our team
      </p>
    </header>

    <form @submit.prevent="handleSubmit" class="space-y-6">
      <form-input
        v-model="formData.name"
        label="Name"
        :error="errors.name"
      />
      
      <form-input
        v-model="formData.email"
        type="email"
        label="Email"
        :error="errors.email"
      />
      
      <form-input
        v-model="formData.message"
        type="textarea"
        label="Message"
        :error="errors.message"
      />

      <div class="flex justify-end">
        <button
          type="submit"
          class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          :disabled="loading"
        >
          {{ loading ? 'Sending...' : 'Send Message' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useForm } from '@/composables/useForm'
import { useNotification } from '@/composables/useNotification'
import FormInput from '@/components/form/FormInput.vue'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

const { formData, errors, handleSubmit } = useForm(schema)
const { show } = useNotification()
const loading = ref(false)

const onSubmit = async (data: typeof formData) => {
  loading.value = true
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    show({
      type: 'success',
      message: 'Message sent successfully!',
      duration: 3000
    })
    formData.value = { name: '', email: '', message: '' }
  } catch (error) {
    show({
      type: 'error',
      message: 'Failed to send message. Please try again.',
      duration: 3000
    })
  } finally {
    loading.value = false
  }
}
</script>