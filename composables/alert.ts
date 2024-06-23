const state = reactive({
	visible: false,
	message: ""
});

export const useAlert = () => {
	const showAlert = (msg: string) => {
		state.visible = true;
		state.message = msg;

		setTimeout(() => {
			state.visible = false;
		}, 3000);
	};

	const closeAlert = () => {
		state.visible = false;
	};

	return {
		...toRefs(state),
		showAlert,
		closeAlert
	};
};
