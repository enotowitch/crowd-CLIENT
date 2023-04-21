import { useState } from "react"
import * as api from "../api"

export default function useAuth(type) {

	const [errorMsg, errorMsgSet] = useState()

	async function onSubmit(e) {
		e.preventDefault()

		let form = {} // {"email": "@","password": "123","user name": "abc"}

		// put all input values to "form"
		e.target.querySelectorAll("input").forEach(each => {
			form = { ...form, [each.name]: each.value }
		})

		const res = await api.auth(type, form)

		res.ok === false && errorMsgSet(res.msg) // error message
		// TODO: making LOG OUT remove token from localStorage
		res.token && localStorage.setItem("token", res.token) // token
	}

	return (
		{ onSubmit, errorMsg }
	)
}