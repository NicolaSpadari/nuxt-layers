export default defineNuxtConfig({
	modules: [
		"@nuxt/eslint",
		"@vueuse/nuxt"
	],
	eslint: {
		config: {
			standalone: false
		}
	}
});
