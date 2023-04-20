import { useState } from "react"
import * as api from "../api"

export default function useArticles() {

	const [articles, articlesSet] = useState()

	async function getArticles() {
		const res = await api.getArticles()
		articlesSet(res)
	}

	getArticles()

	return (
		[articles]
	)
}