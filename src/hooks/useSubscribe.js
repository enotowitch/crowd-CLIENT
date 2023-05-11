import { useState } from "react"
import * as api from "../api"
import parseForm from "../utils/parseForm"

export default function useSubscribe() {

	const [msg, msgSet] = useState()

	async function onSubmit(e) {
		e.preventDefault()

		const { form } = parseForm(e)
		const res = await api.subscribe(form)
		res && msgSet(res.msg) // any message: res || !res
	}

	return (
		{ onSubmit, msg }
	)
}