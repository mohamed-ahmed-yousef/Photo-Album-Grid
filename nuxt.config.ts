// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: ["@nuxtjs/apollo", "@nuxt/image"],
	apollo: {
		clients: {
			default: {
				httpEndpoint: "https://graphqlzero.almansi.me/api",
			},
		},
	},
});
