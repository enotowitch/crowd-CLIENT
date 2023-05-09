import { useContext } from "react"
import * as api from "../api"
import parseForm from "../utils/parseForm"
import useNoUser from "./useNoUser"
import useValidation from "./useValidation"
import { Context } from "../Context"
import animationDelete from "../utils/animationDelete"
import replacePath from "../utils/replacePath"

export default function useBonus(value) { // value=textEditor value

	// ! addBonus
	const { noUser } = useNoUser()
	const { validation } = useValidation()

	async function addBonus(e) {
		e.preventDefault()

		const { form } = parseForm(e)
		const img = replacePath(form.img)

		const res = await api.addBonus({ ...form, img, value })
		res.ok && (window.location.href = `/bonus/${res.id}`)
		noUser(res)
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