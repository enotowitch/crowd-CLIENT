import { useState } from "react"
import * as api from "../api"
import parseForm from "../utils/parseForm"
import clearForm from "../utils/clearForm"

export default function useWriteus() {

	const [msg, msgSet] = useState()

	async function onSubmit(e) {
		e.preventDefault()

		const { form } = parseForm(e)
		const res = await api.writeus(form)
		res.ok && msgSet(res.msg)
		clearForm("writeus")
	}

	return (
		{ onSubmit, msg }
	)
}