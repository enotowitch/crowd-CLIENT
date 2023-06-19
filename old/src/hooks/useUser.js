import { useContext, useEffect } from "react"
import * as api from "../api"
import { Context } from "../Context"

export default function useUser() {

	const { user, userSet } = useContext(Context)

	useEffect(() => {
		async function autoAuth() {
			const res = await api.autoAuth()
			res && userSet(res)
		}

		autoAuth()
	}, [])

	return (
		{ user, userSet }
	)
}