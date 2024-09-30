<script setup lang="ts">
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen px-0 bg-gray-100">
      <h1 class="mb-4 text-6xl font-bold text-gray-800">404</h1>
      <p class="mb-8 text-xl text-gray-600">
        Oops! The page you're looking for doesn't exist.
      </p>
      <router-link
        to="/"
        class="hover:bg-gray-700 px-6 py-3 text-white transition duration-300 bg-gray-600 rounded-lg"
      >
        Go back to Homepage
      </router-link>
    </div>
  </template>
