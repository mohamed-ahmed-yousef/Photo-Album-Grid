<script setup>
import { useRoute } from "vue-router";
import { useGetAlbum } from "~/composables/album";
import AlbumCard from "~/pages/_components/AlbumCard.vue";
import Loading from "~/pages/_components/Loading.vue";
import NotFound from "~/pages/_components/NotFound.vue";

const route = useRoute();
const albumId = route.params.id;
console.log(albumId, "from componenet");

const { result, error, loading } = useGetAlbum(albumId);
const album = result.value?.album?.photos?.data;
</script>

<template>
  <div>
      <div v-if="loading">
        <Loading />
      </div>
      <p v-else-if="error">Error: {{ error.message }}</p>
      <div v-else-if="album?.length > 0" >
        <AlbumCard :album="album" />
    </div>
    <div v-else>
        <NotFound />
    </div>
  </div>
</template>