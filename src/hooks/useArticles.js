import { useEffect, useState } from "react"
import * as api from "../api"
import useSkip from "./useSkip"
import hideShowMore from "../utils/hideShowMore"

export default function useArticles() {

	const [articles, articlesSet] = useState([])
	const { skip, showMore } = useSkip()

	useEffect(() => {
		async function getArticles() {
			const res = await api.getArticles(skip)
			hideShowMore(res)
			articlesSet(prev => [...prev, ...res])
		}

		getArticles()
	}, [skip])

	return (
		{ articles, showMore }
	)
}