import { useEffect, useState } from "react"
import * as api from "../api"

export default function useRating(commentId) {

	const [rating, ratingSet] = useState()

	async function rate(act) {
		const res = await api.rateComment(act, commentId)
		res.ok && ratingSet(res.rating)
	}

	useEffect(() => {
		rate(`no act`, commentId) // * get initial value
	}, [])

	return (
		{ rating, rate }
	)
}