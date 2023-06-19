import { useState } from "react"
import * as api from "../api"
import useNoUser from "./useNoUser"

export default function usePostLikes(id, likes) { // id=PostId likes=dbLikes

	const [likeCount, likeCountSet] = useState(likes)
	const { noUserPopup } = useNoUser()

	async function likePost(e, postType) {
		e.stopPropagation()
		const res = await api.likePost(id, postType)
		res.ok && likeCountSet(res.value)
		noUserPopup(res)
	}

	return (
		{ likeCount, likePost }
	)
}