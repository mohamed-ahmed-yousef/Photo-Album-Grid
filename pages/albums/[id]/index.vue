<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useGetAlbum } from "~/composables/album";
import AlbumCard from "~/pages/_components/AlbumCard.vue";
import Loading from "~/pages/_components/Loading.vue";
import NotFound from "~/pages/_components/NotFound.vue";

const route = useRoute();
const albumId = ref(route.params.id);
console.log(albumId.value, "from component");

const { result, error, loading } = useGetAlbum(albumId);
const album = ref(null);

watchEffect(() => {
	if (result.value?.album?.photos?.data) {
		album.value = result.value.album.photos.data;
		console.log(album.value, "album");
	}
});
</script>

<template>
  <div>
      <div v-if="loading">
        <Loading />
      </div>
      <p v-else-if="error">Error: {{ error.message }}</p>
      <div v-else-if="album && album.length > 0" >
        <AlbumCard :album="album" />
      </div>
      <div v-else>
        <Loading />
      </div>
  </div>
</template>