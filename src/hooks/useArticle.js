import * as api from "../api"
import parseForm from "../utils/parseForm"

export default function useArticle(value) {

	async function addArticle(e) {
		e.preventDefault()

		const { form } = parseForm(e)

		const res = await api.addArticle({ ...form, value })
		console.log(res)
	}

	return (
		{ addArticle }
	)
}