<script setup lang="ts">
import { defineProps } from "vue";

interface Photo {
	id: string;
	title: string;
	thumbnailUrl: string;
	url: string;
}

interface Album {
	id: string;
	title: string;
	photos: {
		data: Photo[];
	};
}

defineProps<{
	data: Album[];
}>();
</script>   

<template>
    <section class="page-container bg-gray-100">
    <h1 class="py-10 text-3xl text-center">Photo Album Grid</h1>
    <ul class="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid grid-cols-1 gap-6">
        <li v-for="album in data" :key="album.id" class="hover:scale-105 overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-md">
        <div v-if="album.photos && album.photos.data.length > 0" class="relative h-48">
            <NuxtImg width="600"height="400" :src="album.photos.data[0].url" :alt="album.photos.data[0].title" class="object-cover w-full h-full" />
            <div class="bg-opacity-30 hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black opacity-0">
            <router-link :to="`/albums/${album.id}`" class="hover:bg-gray-200 px-4 py-2 text-gray-800 transition-colors duration-300 bg-white rounded-md">
                View Album
            </router-link>
            </div>
        </div>
        <div class="p-4">
            <h2 class="mb-2 text-xl font-semibold truncate">{{ album.title }}</h2>
        </div>
        </li>
    </ul>
</section>
</template>