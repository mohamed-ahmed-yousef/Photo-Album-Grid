<script setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useGetAlbum } from "~/graphql/album";
import AlbumCard from "~/pages/_components/AlbumDetails.vue";
import ErrorPage from "~/pages/_components/ErrorPage.vue";
import Loading from "~/pages/_components/Loading.vue";
import NotFound from "~/pages/_components/NotFound.vue";

const route = useRoute();
const albumId = ref(route.params.id);
console.log(albumId.value, "from component");

const { result, error, loading } = useGetAlbum(albumId);
const album = ref(null);
const title = ref(null);

watchEffect(() => {
	if (result.value?.album?.photos?.data) {
		album.value = result.value.album.photos.data;
		title.value = result.value.album.title;
		console.log(album.value, "album");
		console.log(title.value, "title");
	}
});
</script>

<template>
    <div v-if="loading">
        <Loading />
    </div>
    <div v-else-if="error">
        <ErrorPage />
    </div>
    <div v-else-if="album && album.length > 0" class="pb-10">
    <AlbumCard :album="album" :title="title" />
    </div>
    <div v-else>
    <NotFound />
    </div>
</template>