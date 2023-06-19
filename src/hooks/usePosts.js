import { useEffect, useState } from "react"
import * as api from "../api"
import useSkip from "./useSkip"
import hideShowMore from "../utils/hideShowMore"

export default function usePosts(addskip, postType) { // skip renamed to addskip; postType=article/company/bonus

	const [posts, postsSet] = useState([])
	const { skip, limit, showMore } = useSkip(addskip)

	useEffect(() => {
		async function getPosts() {
			const res = await api.getPosts(skip, limit, postType)
			hideShowMore(res)
			postsSet(prev => [...prev, ...res])
		}

		getPosts()
	}, [skip])

	return (
		// !!
		[posts, showMore]
	)
}