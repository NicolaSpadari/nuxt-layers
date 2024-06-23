export const usePlaceholder = () => {
	const generic = "https://via.placeholder.com/500";

	const generatePlaceholder = (w: number, h = w, text = "") => {
		if (text !== "")
			return `https://via.placeholder.com/${w}x${h}?text=${text}`;
		return `https://via.placeholder.com/${w}x${h}`;
	};

	return {
		generic,
		generatePlaceholder
	};
};
