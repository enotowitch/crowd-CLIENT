// str => arr
export default function parseTags(tagsStr) {
	return tagsStr.split(",").map(tag => tag.trim())
}