<script setup lang="ts">
</script>

<template>
    <div class="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid grid-cols-1 gap-4 py-8">
        <div v-for="i in 12" :key="i" class="animate-pulse w-full bg-white rounded-lg shadow-md">
            <div class="h-40 mb-4 bg-gray-300 rounded-md"></div>
            <div class="w-3/4 h-4 mx-2 mb-2 bg-gray-300 rounded"></div>
            <div class="w-1/2 h-4 mx-2 bg-gray-300 rounded"></div>
        </div>
    </div>
</template>