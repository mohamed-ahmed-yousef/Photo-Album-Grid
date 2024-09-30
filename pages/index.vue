<script setup>
import { ref, watchEffect } from "vue";
import { useGetAlbums } from "~/graphql/album";
import HomeCard from "~/pages/_components/AlbumGrid.vue";
import ErrorPage from "~/pages/_components/ErrorPage.vue";
import Loading from "~/pages/_components/Loading.vue";
import NotFound from "~/pages/_components/NotFound.vue";

const { result, error, loading } = useGetAlbums();
const data = ref(null);
const isLoading = ref(true);

watchEffect(() => {
	if (result.value?.albums?.data) {
		data.value = result.value.albums.data;
		isLoading.value = false;
	} else if (error.value) {
		isLoading.value = false;
	}
});
</script>

<template>
    <div v-if="isLoading">
      <Loading />
    </div>
    <div v-else-if="error">
      <ErrorPage />
    </div>
    <div v-else-if="data" class="pb-10" >
      <HomeCard :data="data" />
    </div>
    <div v-else>
      <NotFound />
    </div>
</template>
