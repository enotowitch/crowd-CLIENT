import { useContext } from "react"
import * as api from "../api"
import parseForm from "../utils/parseForm"
import useNoUser from "./useNoUser"
import useValidation from "./useValidation"
import { Context } from "../Context"
import animationDelete from "../utils/animationDelete"

export default function useInvestment(value) { // value=textEditor value

	// ! addInvestment
	const { noUser } = useNoUser()
	const { validation } = useValidation()

	async function addInvestment(e) {
		e.preventDefault()

		const { form } = parseForm(e)

		const res = await api.addInvestment({ ...form, value })
		res.ok && window.location.reload()
		noUser(res)
	}


	return (
		{ addInvestment }
	)
}