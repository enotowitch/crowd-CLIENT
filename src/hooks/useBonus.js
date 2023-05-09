import { useContext } from "react"
import * as api from "../api"
import parseForm from "../utils/parseForm"
import useNoUser from "./useNoUser"
import useValidation from "./useValidation"
import { Context } from "../Context"
import animationDelete from "../utils/animationDelete"

export default function useBonus(value) { // value=textEditor value

	// ! addBonus
	const { noUser } = useNoUser()
	const { validation } = useValidation()

	async function addBonus(e) {
		e.preventDefault()

		const { form } = parseForm(e)

		const res = await api.addBonus({ ...form, value })
		res.ok && (window.location.href = `/bonus/${res.id}`)
		noUser(res)
	}


	return (
		{ addBonus }
	)
}