import { useContext } from "react"
import * as api from "../api"
import { Context } from "../Context"
import useNoUser from "./useNoUser"

export default function useComment(value) { // value=textEditor value

	const { watchingArticle } = useContext(Context)
	const { noUser } = useNoUser()

	async function addComment(e) {
		e.preventDefault()

		const res = await api.addComment(value, watchingArticle)
		res.ok && window.location.reload()
		noUser(res)
	}

	return (
		{ addComment }
	)
}