<script setup>
import { ref, watchEffect } from "vue";
import { useGetAlbums } from "~/composables/album";
import HomeCard from "~/pages/_components/HomeCard.vue";
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
    <p v-else-if="error">Error: {{ error.message }}</p>
    <div v-else-if="data" >
      <HomeCard :data="data" />
    </div>
    <div v-else>
      <NotFound />
    </div>
</template>
