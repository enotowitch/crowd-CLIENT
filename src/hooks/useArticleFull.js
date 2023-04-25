import { useContext, useEffect, useState } from "react"
import * as api from "../api"
import { Context } from "../Context"

export default function useArticleFull(articleId) {

	const [article, articleSet] = useState()

	useEffect(() => {
		async function getArticle() {
			const res = await api.getArticle(articleId)
			articleSet(res)
		}

		getArticle()
	}, [])

	// * articleId user is watching now (for creating comments)
	const { watchingArticleSet } = useContext(Context)
	watchingArticleSet(articleId)


	return (
		{ article }
	)
}