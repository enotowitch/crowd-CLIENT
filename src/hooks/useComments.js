import { useContext, useEffect, useState } from "react"
import * as api from "../api"
import { Context } from "../Context"
import hideShowMore from "../utils/hideShowMore"

// * watchingPost is set in hook use...Full.js
export default function useComments() {

	const [comments, commentsSet] = useState([])
	const { watchingPost } = useContext(Context)

	// onClick to btn showMore skip+=5 => goes to server => skip 5,10,15...
	const [skip, skipSet] = useState(0)
	function showMore() {
		skipSet(prev => prev + 5) // * 0+5/5+5/10+5/15+5...
	}

	useEffect(() => {
		async function getComments() {
			const res = await api.getComments(watchingPost, skip)
			hideShowMore(res)
			res && commentsSet(prev => [...prev, ...res])
		}

		getComments()
	}, [watchingPost, skip])


	return (
		{ comments, showMore }
	)
}