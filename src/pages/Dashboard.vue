<template>
    <div class="p-4">
      <Sidebar />
      <h1 class="text-2xl font-semibold">Dashboard</h1>
      <p>Welcome, {{ auth.user?.username }} ({{ auth.user?.role }})</p>
    </div>
  </template>
  
  <script setup>
  import Sidebar from '../components/Sidebar.vue'
  import { useAuthStore } from '../store/auth'
  
  const auth = useAuthStore()
  </script>
  