import { useContext } from "react"
import * as api from "../api"
import { Context } from "../Context"
import useNoUser from "./useNoUser"
import useValidation from "./useValidation"
import parseForm from "../utils/parseForm"

export default function useComment(value) { // value=textEditor value

	const { watchingPost } = useContext(Context)
	const { noUser } = useNoUser()
	const { validation } = useValidation()

	async function addComment(e) {
		e.preventDefault()

		validation(value, "Comment")
		const { form } = parseForm(e) // recommend

		const res = await api.addComment({ value, ...form }, watchingPost)
		res.ok && window.location.reload()
		noUser(res)
	}

	return (
		{ addComment }
	)
}