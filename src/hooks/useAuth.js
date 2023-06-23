import { useContext } from "react"
import * as api from "../api"
import parseForm from "../utils/parseForm"
import { Context } from "../Context"

export default function useAuth(type) { // type=Log In/Sign Up

	const { errorMsgSet, errorMsgCountSet } = useContext(Context)

	// ! onSubmit
	async function onSubmit(e) {
		e.preventDefault()

		const { form } = parseForm(e)

		const res = await api.auth(type, form)

		if (res.ok === false) {
			errorMsgSet(res.msg)
			errorMsgCountSet(prev => prev + 1)
		} // error message
		res.token && localStorage.setItem("token", res.token) // token
		res.ok && window.location.reload() // success Log In/Sign Up
	}
	// ! forgot
	async function forgot(e) {
		const email = e.target.closest("form").querySelector(`[name="email"]`).value
		const res = await api.forgot(email)
		res && errorMsgSet(res.msg)
	}

	return (
		{ onSubmit, forgot }
	)
}