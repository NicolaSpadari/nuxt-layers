<template>
	<Transition name="alert">
		<div
			v-if="visible"
			fixed bottom-16 right-16 min-w-sm flex items-center justify-between border border-green-900 border-opacity-10 rounded bg-green-100 p-4 text-green-700
			role="alert"
		>
			<p text-sm font-medium>
				{{ message }}
			</p>

			<button type="button" @click="closeAlert()">
				<span sr-only> Close </span>
				<i-heroicons-outline-x h-4 w-4 />
			</button>
		</div>
	</Transition>
</template>

<script lang="ts" setup>
	const { visible, message, closeAlert } = useAlert();
</script>

<style scoped>
    .alert-enter-active,
    .alert-leave-active {
        @apply transition-opacity ease-in-out duration-300;
    }
    .alert-enter-from,
    .alert-leave-to {
        @apply opacity-0;
    }
</style>
