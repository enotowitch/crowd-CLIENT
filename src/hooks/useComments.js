import { useContext, useEffect, useState } from "react"
import * as api from "../api"
import { Context } from "../Context"

// * watchingPost is set in hook use...Full.js
export default function useComments(skip) {

	const [comments, commentsSet] = useState([])
	const { watchingPost } = useContext(Context)

	useEffect(() => {
		async function getComments() {
			const res = await api.getComments(watchingPost, skip)
			// ! hide/show showMore btn
			// !! ".showMore"
			if (res.length === 0) {
				document.querySelector(".showMore").classList.add("dn")
			} else {
				document.querySelector(".showMore").classList.remove("dn")
			}
			// ? hide/show showMore btn
			res && commentsSet(prev => [...prev, ...res])
		}

		getComments()
	}, [watchingPost, skip])


	return (
		{ comments }
	)
}