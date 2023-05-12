import { useEffect, useState } from "react"
import * as api from "../api"

export default function useInvested() {

	const [invested, investedSet] = useState()
	const tempPlatforms = []
	const [platforms, platformsSet] = useState([]) // uniq companies invested
	const tempYears = []
	const [years, yearsSet] = useState([]) // uniq years invested
	const [revenueCurMonth, revenueCurMonthSet] = useState("") // current month all platforms revenue

	useEffect(() => {
		async function getInvested() {
			const res = await api.getInvested()
			investedSet(res)

			// ! platforms
			res?.map(res => !tempPlatforms.includes(res.platform) && tempPlatforms.push(res.platform))
			platformsSet(tempPlatforms)
			// ! years
			res?.map(res => {
				const year = res.start.match(/\d+/)?.[0] // year-05-01
				if (!tempYears.includes(year)) {
					tempYears.push(year)
				}
				yearsSet(tempYears)
			})
			// ! revenueCurMonth
			let tempRevenueCurMonth = 0
			res?.map(res => {
				const thisMonth = new Date().getMonth()
				const endMonth = Number(res.end.match(/(?:-)(\d+)(?:-)/)?.[1]) - 1 // !! 01-05-23 => 01-endMonth-23
				if (endMonth !== thisMonth) { return } // += only this month
				tempRevenueCurMonth += res.invested * res.income / 100 // 1000*5%/100%=50usd
			})
			revenueCurMonthSet(tempRevenueCurMonth)
		}

		getInvested()
	}, [])


	return (
		{ invested, platforms, years, revenueCurMonth }
	)
}