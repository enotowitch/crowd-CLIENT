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
			const res = await api.filterRevenue(currentCompanyName)
			res?.map(company => {
				const start = (company.start.replace(/\d+$/, "15")) // make day=15 for better unix calc
				const end = (company.end.replace(/\d+$/, "15")) // make day=15 for better unix calc
				const startUnixMonth = Math.floor(new Date(start).getTime() / 1000)
				const endUnixMonth = Math.floor(new Date(end).getTime() / 1000)
				const unixMonth = 60 * 60 * 24 * 30.5
				const unixYear = 60 * 60 * 24 * 365
				const monthPassed = Math.floor((endUnixMonth - startUnixMonth) / unixMonth + 1) // 1,2,13...
				const selectedUnixYear = new Date(yearSelected + "-01-01").getTime() / 1000 // 2024-01-01 to unix: came from Select
				let addedUnixMonth = startUnixMonth // start loop with start month + 1 month dep. on monthPassed
				const revenue = company.invested / company.income / 12 // 1000euro/10%=100euro for 1 year; 100euro/12month= 8.333euro each month.

				for (let i = 0; i < monthPassed; i++) {
					// loop unix month is gt (e.g: 2024-01-01(unix)) and lt (e.g: 2025-01-01(unix)): month is in this year
					if (addedUnixMonth > selectedUnixYear && addedUnixMonth < (selectedUnixYear + unixYear)) {
						const monthToPush = new Date(addedUnixMonth * 1000).getMonth() // 0,1,...11
						tempRevenueData[monthToPush] = [Number(tempRevenueData[monthToPush]) + revenue].toString() // `push` revenue to its month (all projects)
					}
					addedUnixMonth += unixMonth
				}
				revenueDataSet(tempRevenueData)
			})
		}

		filterRevenue()
	}, [currentCompanyName, yearSelected])

	return (
		{ revenue, revenueData, revenueHighlight }
	)
}