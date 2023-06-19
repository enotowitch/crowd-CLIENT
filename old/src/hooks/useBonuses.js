import { useEffect, useState } from "react"
import * as api from "../api"
import useSkip from "./useSkip"
import hideShowMore from "../utils/hideShowMore"

export default function useBonuses() {

	const [bonuses, bonusesSet] = useState([])
	const { skip, showMore } = useSkip()

	useEffect(() => {
		async function getBonuses() {
			const res = await api.getBonuses(skip)
			hideShowMore(res)
			bonusesSet(prev => [...prev, ...res])
		}

		getBonuses()
	}, [skip])

	return (
		{ bonuses, showMore }
	)
}