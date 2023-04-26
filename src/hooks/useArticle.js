import * as api from "../api"
import parseForm from "../utils/parseForm"
import useNoUser from "./useNoUser"
import useValidation from "./useValidation"

export default function useArticle(value) { // value=textEditor value

	// ! addArticle
	const { noUser } = useNoUser()
	const { validation } = useValidation()

	async function addArticle(e) {
		e.preventDefault()

		const { form } = parseForm(e)

		validation(form.title, "Article title")
		validation(value, "Article text")

		const res = await api.addArticle({ ...form, value })
		res.ok && (window.location.href = `/article/${res.id}`)
		noUser(res)
	}

	// ! deleteArticle
	async function deleteArticle(id, e) {
		const res = await api.deleteArticle(id)
		if (res.ok) {
			e.target.closest(".articleCard").classList.add("animationDelete")
			setTimeout(() => {
				e.target.closest(".articleCard").classList.add("dn")
			}, 500);
		}
	}


	return (
		{ addArticle, deleteArticle }
	)
}