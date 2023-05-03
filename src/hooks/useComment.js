import { useContext } from "react"
import * as api from "../api"
import { Context } from "../Context"
import useNoUser from "./useNoUser"
import useValidation from "./useValidation"

export default function useComment(value) { // value=textEditor value

	const { watchingPost } = useContext(Context)
	const { noUser } = useNoUser()
	const { validation } = useValidation()

	async function addComment(e) {
		e.preventDefault()

		validation(value, "Comment")

		const res = await api.addComment(value, watchingPost)
		res.ok && window.location.reload()
		noUser(res)
	}

	return (
		{ addComment }
	)
}