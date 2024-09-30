<script setup>
import { useGetAlbums } from "~/composables/album";
import HomeCard from "~/pages/_components/HomeCard.vue";
import Loading from "~/pages/_components/Loading.vue";
import NotFound from "~/pages/_components/NotFound.vue";

const { result, error, loading } = useGetAlbums();
const data = result.value?.albums?.data;
const isLoading = loading.value;
</script>

<template>
  <div>
    <div v-if="isLoading">
      <Loading />
    </div>
    <p v-else-if="error">Error: {{ error.message }}</p>
    <div v-else-if="data" >
      <HomeCard :data="data" />
    </div>
    <div v-else>
      <NotFound />
    </div>
  </div>
</template>
