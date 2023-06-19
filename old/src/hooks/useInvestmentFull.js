import { useContext, useEffect, useState } from "react"
import * as api from "../api"
import { Context } from "../Context"

export default function useInvestmentFull(investmentId) {

	const [investment, investmentSet] = useState()

	useEffect(() => {
		async function getInvestment() {
			const res = await api.getInvestment(investmentId)
			investmentSet(res)
		}

		getInvestment()
	}, [])

	// * investmentId user is watching now (for edit investment)
	const { watchingPostSet } = useContext(Context)
	watchingPostSet(investmentId)


	return (
		{ investment }
	)
}