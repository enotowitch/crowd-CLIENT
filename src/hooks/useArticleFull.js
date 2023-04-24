import { useEffect, useState } from "react"
import * as api from "../api"

export default function useArticleFull(id) {

	const [article, articleSet] = useState()

	useEffect(() => {
		async function getArticle() {
			const res = await api.getArticle(id)
			articleSet(res)
		}

		getArticle()
	}, [])


	return (
		{ article }
	)
}