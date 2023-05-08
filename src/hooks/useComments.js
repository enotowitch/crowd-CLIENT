import { useContext, useEffect, useState } from "react"
import * as api from "../api"
import { Context } from "../Context"
import hideShowMore from "../utils/hideShowMore"

// * watchingPost is set in hook use...Full.js
export default function useComments(skip) {

	const [comments, commentsSet] = useState([])
	const { watchingPost } = useContext(Context)

	useEffect(() => {
		async function getComments() {
			const res = await api.getComments(watchingPost, skip)
			hideShowMore(res)
			res && commentsSet(prev => [...prev, ...res])
		}

		getComments()
	}, [watchingPost, skip])


	return (
		{ comments }
	)
}