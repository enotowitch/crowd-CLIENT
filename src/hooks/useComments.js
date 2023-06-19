import { useContext, useEffect, useState } from "react"
import * as api from "../api"
import { Context } from "../Context"
import hideShowMore from "../utils/hideShowMore"
import useSkip from "./useSkip"

// * watchingPost is set in hook use...Full.js
export default function useComments(postType) { // postType=article/company/...

	const [comments, commentsSet] = useState([])
	const { watchingPost } = useContext(Context)

	const { skip, showMore } = useSkip()

	useEffect(() => {
		async function getComments() {
			const res = await api.getComments(watchingPost, 0, postType) // postId,skip,postType(article/company/bonus)
			hideShowMore(res)
			res && commentsSet(prev => [...prev, ...res])
		}

		getComments()
	}, [watchingPost, skip])


	return (
		{ comments, showMore }
	)
}