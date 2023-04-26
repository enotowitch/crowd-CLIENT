import { useContext, useState } from "react"
import * as api from "../api"
import { Context } from "../Context"

export default function useRating(commentId) {

	const [rating, ratingSet] = useState()
	const { popupElementSet } = useContext(Context)

	async function rate(act) {
		const res = await api.rateComment(act, commentId)
		res.ok && ratingSet(res.rating)
		res.ok === false && popupElementSet("Login")
	}

	return (
		{ rating, rate }
	)
}