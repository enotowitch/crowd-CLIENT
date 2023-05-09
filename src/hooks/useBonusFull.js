import { useContext, useEffect, useState } from "react"
import * as api from "../api"
import { Context } from "../Context"

export default function useBonusFull(bonusId) {

	const [bonus, bonusSet] = useState()

	useEffect(() => {
		async function getBonus() {
			const res = await api.getBonus(bonusId)
			bonusSet(res)
		}

		getBonus()
	}, [])

	// * bonusId user is watching now (for creating comments / edit bonus)
	const { watchingPostSet } = useContext(Context)
	watchingPostSet(bonusId)


	return (
		{ bonus }
	)
}