export default defineNuxtConfig({
	modules: [
		"@vueuse/nuxt",
		"@unocss/nuxt",
		"@nuxt/eslint"
	],
	css: [
		"@unocss/reset/tailwind.css"
	],
	eslint: {
		config: {
			standalone: false
		}
	}
});
