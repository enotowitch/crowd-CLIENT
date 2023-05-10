import * as api from "../api"
import parseForm from "../utils/parseForm"

export default function useWriteus() {

	async function writeus(e) {
		e.preventDefault()

		const { form } = parseForm(e)

		const res = await api.writeus(form)
		console.log(res)
	}

	return (
		{ writeus }
	)
}