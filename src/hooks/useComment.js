import { useContext } from "react"
import * as api from "../api"
import { Context } from "../Context"
import useNoUser from "./useNoUser"
import useValidation from "./useValidation"
import parseForm from "../utils/parseForm"

export default function useComment(value, postType) { // value=textEditor value

	const { watchingPost } = useContext(Context)
	const { noUserPopup } = useNoUser()
	const { validation } = useValidation()

	async function addComment(e) {
		e.preventDefault()

		validation({ validate: "textLength", value, errorText: `Comment must include at least 3 characters` })
		const { form } = parseForm(e) // recommend

		const res = await api.addComment({ value, ...form }, watchingPost, postType)
		res.ok && window.location.reload()
		noUserPopup(res)
	}

	return (
		{ addComment }
	)
}