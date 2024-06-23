const isOpen = ref(new Map());

export const useModal = () => {
	const openModal = (id: string) => {
		isOpen.value.set(id, true);
	};

	const closeModal = (id: string) => {
		isOpen.value.set(id, false);
	};

	return {
		isOpen,
		openModal,
		closeModal
	};
};
