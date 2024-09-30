<script setup>
import { useGetAlbums } from "~/composables/album";

const { result, error, loading } = useGetAlbums();
const data = result.value?.albums?.data;
const isLoading = loading.value;
</script>

<template>
  <div>
    <h1 class="text-4xl">Albums</h1>
    <p v-if="isLoading">Loading albums...</p>
    <p v-else-if="error">Error: {{ error.message }}</p>
    <div v-else-if="data">
      <ul>
        <li v-for="album in data" :key="album.id" class="mb-4">
          <h2>{{ album.title }}</h2>
          <div v-if="album.photos && album.photos.data.length > 0">
            <img :src="album.photos.data[0].thumbnailUrl" :alt="album.photos.data[0].title">
          </div>
          <NuxtLink :to="`/albums/${album.id}`" class="hover:underline text-blue-500">
            View more
          </NuxtLink>
        </li>
      </ul>
    </div>
    <p v-else>No albums found.</p>
  </div>
</template>
