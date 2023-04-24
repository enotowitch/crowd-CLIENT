import { useState } from "react"
import * as api from "../api"
import parseForm from "../utils/parseForm"

export default function useAuth(type) { // type=Log In/Sign Up

	const [errorMsg, errorMsgSet] = useState()

	async function onSubmit(e) {
		e.preventDefault()

		const { form } = parseForm(e)

		const res = await api.auth(type, form)

		res.ok === false && errorMsgSet(res.msg) // error message
		res.token && localStorage.setItem("token", res.token) // token
		res.ok && window.location.reload() // success Log In/Sign Up
	}

	return (
		{ onSubmit, errorMsg }
	)
}