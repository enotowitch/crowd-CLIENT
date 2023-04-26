import { useContext } from "react"
import * as api from "../api"
import parseForm from "../utils/parseForm"
import useNoUser from "./useNoUser"
import useValidation from "./useValidation"
import { Context } from "../Context"

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

	// ! editArticle
	const { watchingArticle } = useContext(Context) // * id of article I am editing now

	async function editArticle(e) {
		e.preventDefault()

		const { form } = parseForm(e)
		const formAndValue = { ...form, value }

		const res = await api.editArticle(watchingArticle, formAndValue)
		res.ok && (window.location.href = `/article/${watchingArticle}`)
	}


	return (
		{ addArticle, deleteArticle, editArticle }
	)
}