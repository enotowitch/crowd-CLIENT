export default function useTimeRead() {
	// TODO: search file timeRead not useTimeRead ???

	function timeRead(value) {
		return Math.ceil(value?.split(" ").length / 300) + " min read"
	}

	return (
		{ timeRead }
	)
}