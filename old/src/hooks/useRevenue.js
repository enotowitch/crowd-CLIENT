import { useEffect, useState } from "react"
import * as api from "../api"

// `company`=`platform`
export default function useRevenue(currentCompanyName, yearSelected) {

	// * labels in Bar.js
	const revenue = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	//  * data in Bar.js
	const [revenueData, revenueDataSet] = useState(["", "", "", "", "", "", "", "", "", "", "", ""])
	const tempRevenueData = ["", "", "", "", "", "", "", "", "", "", "", ""]
	//  * Highlight current month
	const revenueHighlight = new Date().getMonth()

	useEffect(() => {
		revenueDataSet(["", "", "", "", "", "", "", "", "", "", "", ""]) // null revenueData on new filter select
		async function filterRevenue() {
			const res = await api.filterRevenue(currentCompanyName, yearSelected)
			res?.map(company => {
				const endMonth = Number(company.end.match(/(?:-)(\d+)(?:-)/)?.[1]) - 1 // 2023-05-25 => 2023-endMonth-25
				const revenue = company.invested * company.income / 100 // 1000*5%/100%=50usd
				tempRevenueData[endMonth] = [Number(tempRevenueData[endMonth]) + revenue].toString() // `push` revenue to its month
				revenueDataSet(tempRevenueData)
			})
		}

		filterRevenue()
	}, [currentCompanyName, yearSelected])

	return (
		{ revenue, revenueData, revenueHighlight }
	)
}