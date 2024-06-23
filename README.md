<h1 align="center">Nuxt Layers</h1>
<p align="center">A personal collection of reusable code in Nuxt 3 applications</p>
<hr />

## Import to your project

Entire collection:
```js
export default defineNuxtConfig({
	extends: [
		"github:NicolaSpadari/nuxt-layers"
	]
	// rest of config file
});
```

Single layer:
```js
export default defineNuxtConfig({
	extends: [
		"github:NicolaSpadari/nuxt-layers/layer-placeholders"
	]
	// rest of config file
});
```

Layer that requires libraries:
```js
export default defineNuxtConfig({
	extends: [
		"github:NicolaSpadari/nuxt-layers/layer-modal",
		{
			install: true
		}
	]
	// rest of config file
});
```

## Useful links

Official [Nuxt documentation](https://nuxt.com/docs/guide/going-further/layers)
