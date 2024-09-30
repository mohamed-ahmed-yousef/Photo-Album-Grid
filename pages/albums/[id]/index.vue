<script setup>
import { useRoute } from "vue-router";
import { useGetAlbum } from "~/composables/album";

const route = useRoute();
const albumId = route.params.id;
console.log(albumId, "from componenet");

const { result, error, loading } = useGetAlbum(albumId);
const album = computed(() => result.value?.album);
</script>

<template>
  <div>
    <h1 class="mb-6 text-4xl">{{ album?.title || 'Album' }}</h1>
    <p v-if="loading">Loading album...</p>
    <p v-else-if="error">Error: {{ error.message }}</p>
    <div v-else-if="album" class="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid grid-cols-1 gap-4">
      <div v-for="photo in album.photos.data" :key="photo.id" class="overflow-hidden bg-white rounded-lg shadow-md">
        <img :src="photo.url" :alt="photo.title" class="object-cover w-full h-48">
        <div class="p-4">
          <h2 class="text-lg font-semibold truncate">{{ photo.title }}</h2>
        </div>
      </div>
    </div>
    <p v-else>No album found.</p>
  </div>
</template>