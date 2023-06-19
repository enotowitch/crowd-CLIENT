import { useState } from "react"
import * as api from "../api"
import useNoUser from "./useNoUser"

export default function useRating(commentId) {

	const [rating, ratingSet] = useState()
	const { noUserPopup } = useNoUser()

	async function rate(act) {
		const res = await api.rateComment(act, commentId)
		res.ok && ratingSet(res.rating)
		noUserPopup(res)
	}

	return (
		{ rating, rate }
	)
}