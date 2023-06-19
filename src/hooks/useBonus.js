import { useContext } from "react"
import * as api from "../api"
import parseForm from "../utils/parseForm"
import useValidation from "./useValidation"
import { Context } from "../Context"
import animationDelete from "../utils/animationDelete"
import replacePath from "../utils/replacePath"

export default function useBonus(value) { // value=textEditor value

	// ! addBonus
	const { validation } = useValidation()

	async function addBonus(e) {
		e.preventDefault()

		const { form } = parseForm(e)
		const img = replacePath(form.img)

		validation({ validate: "postImg", value: img, errorText: `Must include image: "add image"` })

		const res = await api.addPost({ ...form, img, value }, "bonus")
		res.ok && (window.location.href = `/bonus/${res.id}`)
	}

	// ! deleteBonus
	async function deleteBonus(id, e) {
		const res = await api.deleteBonus(id)
		animationDelete(res, e)
	}

	// ! editBonus
	const { watchingPost } = useContext(Context) // * id of company I am editing now

	async function editBonus(e) {
		e.preventDefault()

		const { form } = parseForm(e)
		const img = replacePath(form.img)

		// * keep old img if not uploaded new img
		let formAndValue
		if (form.updatedImg === "false") {
			const { img, ...formWithoutImg } = form
			formAndValue = { ...formWithoutImg, value }
		} else {
			formAndValue = { ...form, img, value }
		}

		const res = await api.editBonus(watchingPost, formAndValue)
		res.ok && (window.location.href = `/bonus/${watchingPost}`)
	}


	return (
		{ addBonus, deleteBonus, editBonus }
	)
}