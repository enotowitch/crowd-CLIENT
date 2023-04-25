import { useEffect, useState } from "react"
import * as api from "../api"

export default function useComments(articleId) {

	const [comments, commentsSet] = useState()

	useEffect(() => {
		async function getComments() {
			const res = await api.getComments(articleId)
			res && commentsSet(res)
		}

		getComments()
	}, [])


	return (
		{ comments }
	)
}