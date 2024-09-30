<script setup lang="ts">
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen px-0 bg-gray-100">
        <h1 class="mb-4 text-4xl font-bold text-red-600">Error</h1>
        <p class="mb-8 text-xl text-gray-600">
            Oops! Something went wrong.
        </p>
        <router-link
            to="/"
            class="hover:bg-red-700 px-6 py-3 text-white transition duration-300 bg-red-600 rounded-lg"
        >
            Go back to Homepage
        </router-link>
    </div>
</template>