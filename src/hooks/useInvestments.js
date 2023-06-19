import { useEffect, useState } from "react"
import * as api from "../api"
import useSkip from "./useSkip"
import hideShowMore from "../utils/hideShowMore"
import useInvestment from "./useInvestment"

export default function useInvestments() {

	const [investments, investmentsSet] = useState([])
	const { skip, showMore } = useSkip()
	const { removeInvestment } = useInvestment()

	useEffect(() => {
		async function getInvestments() {
			const res = await api.getInvestments(skip)
			hideShowMore(res)

			// * close old investments: investment end date is older than today => close
			res?.map(investment => {
				const endUnix = Math.floor(new Date(investment.end).getTime() / 1000)
				const todayUnix = Math.floor(Date.now() / 1000)
				if (endUnix < todayUnix) {
					!investment.closed && removeInvestment(investment._id) // if not closed => close
				}
			})

			res.length > 0 && investmentsSet(prev => [...prev, ...res])
		}

		getInvestments()
	}, [skip])

	return (
		{ investments, showMore }
	)
}