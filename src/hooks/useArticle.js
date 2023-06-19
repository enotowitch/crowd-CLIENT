import { useContext } from "react"
import * as api from "../api"
import parseForm from "../utils/parseForm"
import useValidation from "./useValidation"
import { Context } from "../Context"
import animationDelete from "../utils/animationDelete"

export default function useArticle(value) { // value=textEditor value

	// ! addArticle
	const { validation } = useValidation()

	async function addArticle(e) {
		e.preventDefault()

		const { form } = parseForm(e)

		validation({ validate: "textEditorImg", value, errorText: "Must have image: ![](https://)" })

		const res = await api.addPost({ ...form, value }, "article")
		res.ok && (window.location.href = `/article/${res.id}`)
	}

	// ! deleteArticle
	async function deleteArticle(id, e) {
		const res = await api.deleteArticle(id)
		animationDelete(res, e)
	}

	// ! editArticle
	const { watchingPost } = useContext(Context) // * id of article I am editing now

	async function editArticle(e) {
		e.preventDefault()

		const { form } = parseForm(e)
		const formAndValue = { ...form, value }

		const res = await api.editArticle(watchingPost, formAndValue)
		res.ok && (window.location.href = `/article/${watchingPost}`)
	}


	return (
		{ addArticle, deleteArticle, editArticle }
	)
}