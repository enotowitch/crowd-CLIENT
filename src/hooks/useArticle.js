import * as api from "../api"
import parseForm from "../utils/parseForm"
import useNoUser from "./useNoUser"

export default function useArticle(value) { // value=textEditor value

	const { noUser } = useNoUser()

	async function addArticle(e) {
		e.preventDefault()

		const { form } = parseForm(e)

		const res = await api.addArticle({ ...form, value })
		res.ok && (window.location.href = `/article/${res._id}`)
		noUser(res)
	}

	return (
		{ addArticle }
	)
}