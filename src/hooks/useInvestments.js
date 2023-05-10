import { useEffect, useState } from "react"
import * as api from "../api"
import useSkip from "./useSkip"
import hideShowMore from "../utils/hideShowMore"

export default function useInvestments() {

	const [investments, investmentsSet] = useState([])
	const { skip, showMore } = useSkip()

	useEffect(() => {
		async function getInvestments() {
			const res = await api.getInvestments(skip)
			hideShowMore(res)
			res.length > 0 && investmentsSet(prev => [...prev, ...res])
		}

		getInvestments()
	}, [skip])

	return (
		{ investments, showMore }
	)
}