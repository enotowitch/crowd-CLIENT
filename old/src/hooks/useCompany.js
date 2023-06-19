import { useContext } from "react"
import * as api from "../api"
import parseForm from "../utils/parseForm"
import useNoUser from "./useNoUser"
import useValidation from "./useValidation"
import { Context } from "../Context"
import animationDelete from "../utils/animationDelete"
import replacePath from "../utils/replacePath"
import parseFraisObj from "../utils/parseFraisObj"

export default function useCompany(value) { // value=textEditor value

	// ! addCompany
	async function addCompany(e) {
		e.preventDefault()

		const { form } = parseForm(e)
		const img = replacePath(form.img)

		const { FraisObj } = parseFraisObj(form)

		const res = await api.addCompany({ ...form, FraisObj, img, value })
		res.ok && (window.location.href = `/company/${res.id}`)
	}

	// ! deleteCompany
	async function deleteCompany(id, e) {
		const res = await api.deleteCompany(id)
		animationDelete(res, e)
	}

	// ! editCompany
	const { watchingPost } = useContext(Context) // * id of company I am editing now

	async function editCompany(e) {
		e.preventDefault()

		const { form } = parseForm(e)
		const img = replacePath(form.img)

		const { FraisObj } = parseFraisObj(form)

		// * keep old img if not uploaded new img
		let formAndValue
		if (form.updatedImg === "false") {
			const { img, ...formWithoutImg } = form
			formAndValue = { ...formWithoutImg, value }
		} else {
			formAndValue = { ...form, img, value }
		}

		const res = await api.editCompany(watchingPost, { ...formAndValue, FraisObj })
		res.ok && (window.location.href = `/company/${watchingPost}`)
	}


	return (
		{ addCompany, deleteCompany, editCompany }
	)
}