export default function useTimeRead() {

	function timeRead(value) {
		return Math.ceil(value?.split(" ").length / 300) + " min read"
	}

	return (
		{ timeRead }
	)
}