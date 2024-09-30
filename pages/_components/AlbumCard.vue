<script setup lang="ts">
import { defineProps } from "vue";

interface Photo {
	id: string;
	title: string;
	url: string;
}

interface Album {
	photos: Photo[];
}

defineProps<{
	album: Photo[];
	title: string;
}>();
</script>

<template>
    <h1 class="mb-10 text-3xl text-center">{{ title || "Photo Album Grid" }}</h1>
    <div class="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid grid-cols-1 gap-4">
        <div v-for="photo in album" :key="photo.id" class="hover:scale-105 overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-md">
            <img :src="photo.url" :alt="photo.title" class="object-cover w-full h-48">
            <div class="p-4">
                <h2 class="text-lg font-semibold truncate">{{ photo.title }}</h2>
            </div>
        </div>
    </div>
</template>