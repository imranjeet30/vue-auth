<template>
    <nav class="mb-4">
      <ul>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li v-if="auth.user?.role === 'admin'">
          <router-link to="/admin">Admin</router-link>
        </li>
        <li>
          <button @click="logout" class="text-red-600 underline">Logout</button>
        </li>
      </ul>
    </nav>
  </template>

<script setup>
    import { useAuthStore } from '@/store/auth';
    import { useRouter } from 'vue-router';

    const auth = useAuthStore()
    const router = useRouter()

    function logout(){
        auth.logout()
        router.push('/login')
    }
</script>
