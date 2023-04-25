import { useEffect, useState } from "react"
import * as api from "../api"

// TODO id=articleId
export default function useComments(id) {

	const [comments, commentsSet] = useState()

	useEffect(() => {
		async function getComments() {
			const res = await api.getComments(id)
			res && commentsSet(res)
		}

		getComments()
	}, [])


	return (
		{ comments }
	)
}