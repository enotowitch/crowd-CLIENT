import { useEffect, useState } from "react"
import * as api from "../api"

export default function useUser() {

	const [user, userSet] = useState()

	useEffect(() => {
		async function autoAuth() {
			const res = await api.autoAuth()
			res && userSet(res)
		}

		autoAuth()
	}, [])

	return (
		[user]
	)
}