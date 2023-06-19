import { useEffect, useState } from "react"
import * as api from "../api"

export default function useInvested() {

	const [invested, investedSet] = useState()
	const tempPlatforms = []
	const [platforms, platformsSet] = useState([]) // uniq companies invested
	const tempYears = []
	const [years, yearsSet] = useState([]) // uniq years invested
	const [revenueCurMonth, revenueCurMonthSet] = useState(0) // current month all platforms revenue
	const [revenueCurYear, revenueCurYearSet] = useState(0) // current year all platforms revenue

	useEffect(() => {
		async function getInvested() {
			const res = await api.getInvested()
			investedSet(res) // ! 1. invested

			const thisYear = new Date().getFullYear()
			const todayUnix = Math.floor(new Date() / 1000)

			// ! 2. platforms
			res?.map(res => !tempPlatforms.includes(res.platform) && tempPlatforms.push(res.platform))
			platformsSet(tempPlatforms)
			// ! 3. years: collect all years that are in investments to add them to Select
				tempYears.push(thisYear - 3)
				tempYears.push(thisYear - 2)
				tempYears.push(thisYear - 1)
				// tempYears.push(thisYear)
				tempYears.push(thisYear + 1)
				tempYears.push(thisYear + 2)
				tempYears.push(thisYear + 3)
				yearsSet(tempYears)
			// ! 4. revenueCurMonth
			let tempRevenueCurMonth = 0
			res?.map(res => {
				const startMonth = res.start.replace(/\d+$/, "01") // make start month from 01-date (to have full month)
				const startUnixMonth = Math.floor(new Date(startMonth).getTime() / 1000)
				const endMonth = new Date(res.end).getMonth() // 0,1...,11
				// ! make end month 28/30/31-date (to have full month)
				let end
				if ([0, 2, 4, 6, 7, 9, 11].includes(endMonth)) {
					end = res.end.replace(/\d+$/, "31") // mo has 31 days
				} else {
					end = res.end.replace(/\d+$/, "30") // mo has 30 days
				}
				if (endMonth === 1) {
					end = res.end.replace(/\d+$/, "28") // mo has 28 days
				}
				// ? make end month from 28/30/31-date (to have full month)
				const endUnixMonth = Math.floor(new Date(end).getTime() / 1000)
				// today is between start-date and end-date
				if (todayUnix > startUnixMonth && todayUnix < endUnixMonth) {
					tempRevenueCurMonth += res.invested / res.income / 12
				}
			})
			tempRevenueCurMonth = tempRevenueCurMonth.toFixed(2)
			revenueCurMonthSet(tempRevenueCurMonth)
			// ! 5. revenueCurYear
			let tempRevenueCurYear = 0
			res?.map(res => {
				const start = (res.start.replace(/\d+$/, "15")) // make day=15 for better unix calc
				const end = (res.end.replace(/\d+$/, "15")) // make day=15 for better unix calc
				const startUnixMonth = Math.floor(new Date(start).getTime() / 1000)
				const endUnixMonth = Math.floor(new Date(end).getTime() / 1000)
				const unixMonth = 60 * 60 * 24 * 30
				const unixYear = 60 * 60 * 24 * 365
				const monthPassed = Math.floor((endUnixMonth - startUnixMonth) / unixMonth + 1) // 1,2,13...
				const selectedUnixYear = new Date(thisYear + "-01-01").getTime() / 1000 // 2024-01-01 to unix: came from Select
				let addedUnixMonth = startUnixMonth // start loop with start month + 1 month dep. on monthPassed

				let monthInThisYear = 0 // 1,2...,12
				for (let i = 0; i < monthPassed; i++) {
					// loop unix month is gt (e.g: 2024-01-01(unix)) and lt (e.g: 2025-01-01(unix)): month is in this year
					if (addedUnixMonth > selectedUnixYear && addedUnixMonth < (selectedUnixYear + unixYear)) {
						monthInThisYear += 1
					}
					addedUnixMonth += unixMonth
				}
				tempRevenueCurYear += res.invested / res.income / 12 * monthInThisYear // 100euro/10%/12(month)*(e.g)8(month)
			})
			tempRevenueCurYear = tempRevenueCurYear.toFixed(2)
			revenueCurYearSet(tempRevenueCurYear)
		}

		getInvested()
	}, [])


	return (
		{ invested, platforms, years, revenueCurMonth, revenueCurYear }
	)
}