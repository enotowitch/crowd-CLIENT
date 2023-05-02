import { useContext } from "react"
import * as api from "../api"
import parseForm from "../utils/parseForm"
import useNoUser from "./useNoUser"
import useValidation from "./useValidation"
import { Context } from "../Context"
import animationDelete from "../utils/animationDelete"

export default function useCompany(value) { // value=textEditor value

	// ! addCompany
	async function addCompany(e) {
		e.preventDefault()

		const { form } = parseForm(e)
		const img = form.img.replace(/(.+)(?:\\)/, "") // todo C:\fakepath\

		const res = await api.addCompany({ ...form, img, value })
		res.ok && (window.location.href = `/company/${res.id}`)
	}

	// ! deleteCompany
	async function deleteCompany(id, e) {
		const res = await api.deleteCompany(id)
		animationDelete(res, e)
	}


	return (
		{ addCompany, deleteCompany }
	)
}