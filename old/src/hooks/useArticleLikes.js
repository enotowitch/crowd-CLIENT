import { useState } from "react"
import * as api from "../api"

export default function useArticleLikes(id, likes) { // id=articleId likes=dbLikes

	const [likeCount, likeCountSet] = useState(likes)

	async function likeArticle() {
		const res = await api.likeArticle(id)
		res.ok && likeCountSet(res.value)
	}

	return (
		{ likeCount, likeArticle }
	)
}