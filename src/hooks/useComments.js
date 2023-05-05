import { useContext, useEffect, useState } from "react"
import * as api from "../api"
import { Context } from "../Context"

// * watchingPost is set in hook use...Full.js
export default function useComments() {

	const [comments, commentsSet] = useState()
	const { watchingPost } = useContext(Context)

	useEffect(() => {
		async function getComments() {
			const res = await api.getComments(watchingPost)
			res && commentsSet(res)
		}

		getComments()
	}, [watchingPost])


	return (
		{ comments }
	)
}