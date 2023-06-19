import { useEffect, useState } from "react"
import * as api from "../api"

// !! NOT USED, LEFT JUST INCASE
export default function useUser() {

	const [user, userSet] = useState(null)

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