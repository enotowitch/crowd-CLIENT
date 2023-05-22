// str => arr
export default function parseTags(tagsStr) {
	if (!tagsStr) { return }
	return tagsStr.split(",").map(tag => tag.trim())
}