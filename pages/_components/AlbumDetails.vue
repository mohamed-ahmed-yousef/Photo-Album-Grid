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
    <section class="page-container bg-gray-100">
        <div class="flex items-center justify-between py-10">
            <h1 class=" text-3xl text-center">{{ title || "Photo Album Grid" }}</h1>
            <router-link 
            to="/"
            class="hover:bg-gray-700 px-6 py-3 text-white transition duration-300 bg-gray-600 rounded-lg"
            >
            Go Back
        </router-link>
    </div>
    <div class="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid grid-cols-1 gap-4">
        <div v-for="photo in album" :key="photo.id" class="hover:scale-105 overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-md">
            <NuxtImg  width="600"height="400" :src="photo.url" :alt="photo.title" class="object-cover w-full h-48" />
            <div class="p-4">
                <h2 class="text-lg font-semibold">{{ photo.title }}</h2>
            </div>
        </div>
    </div>
</section>
</template>