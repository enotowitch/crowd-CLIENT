import { useContext } from "react"
import * as api from "../api"
import { Context } from "../Context"

export default function useComment(value) { // value=textEditor value

	const { watchingArticle } = useContext(Context)

	async function addComment(e) {
		e.preventDefault()

		const res = await api.addComment(value, watchingArticle)
		res && window.location.reload()
	}

	return (
		{ addComment }
	)
}