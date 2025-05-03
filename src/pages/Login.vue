<!-- src/pages/Login.vue -->
<template>
    <div class="p-4 w-3/5 mx-auto">
      <h2 class="mb-2 text-xl font-bold">Login</h2>
      <input v-model="username" placeholder="Username" class="border p-1 mb-2 block w-full" />
      
      <select v-model="role" class="border p-1 mb-2 block w-full">
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      
      <button @click="handleLogin" class="bg-blue-600 text-white px-4 py-2">
        Login
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAuthStore } from '../store/auth'
  
  const username = ref('')
  const role = ref('user')
  
  const router = useRouter()
  const auth = useAuthStore()
  
  async function handleLogin() {
    if (username.value.trim()) {
      auth.login(username.value, role.value)
      router.push('/dashboard')
    }
  }
  </script>
  