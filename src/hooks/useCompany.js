import { useContext } from "react"
import * as api from "../api"
import parseForm from "../utils/parseForm"
import useNoUser from "./useNoUser"
import useValidation from "./useValidation"
import { Context } from "../Context"

export default function useCompany(value) { // value=textEditor value

	// ! addCompany
	async function addCompany(e) {
		e.preventDefault()

		const { form } = parseForm(e)

		const res = await api.addCompany({ ...form, value })
		res.ok && (window.location.href = `/company/${res.id}`)
	}


	return (
		{ addCompany }
	)
}