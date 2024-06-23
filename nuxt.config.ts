export default defineNuxtConfig({
	modules: [
		"@vueuse/nuxt",
		"@unocss/nuxt",
		"@nuxt/eslint",
	],
	app: {
		head: {
			title: "Nuxt 3 Layers",
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			meta: [
				{ name: "format-detection", content: "no" }
			],
			bodyAttrs: {
				class: "font-text antialiased"
			},
			noscript: [
				{ children: "JavaScript is required to run this project" }
			]
		}
	},
	css: [
		"@unocss/reset/tailwind.css"
	],
	vue: {
		compilerOptions: {
			isCustomElement: (tag: string) => tag.startsWith("i-")
		}
	},
	eslint: {
		config: {
			standalone: false
		}
	}
});
