<template>
    <div class="p-4">
      <Sidebar />
      <h1 class="text-2xl font-semibold text-red-600">Admin Panel</h1>
      <p>Only admins can see this page.</p>
    </div>
  </template>
  
  <script setup>
  import Sidebar from '../components/Sidebar.vue'
  </script>
  