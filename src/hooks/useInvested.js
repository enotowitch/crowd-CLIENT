import { useEffect, useState } from "react"
import * as api from "../api"

export default function useInvested() {

	const [invested, investedSet] = useState()
	const tempPlatforms = []
	const [platforms, platformsSet] = useState([]) // uniq companies invested
	const tempYears = []
	const [years, yearsSet] = useState([]) // uniq years invested

	useEffect(() => {
		async function getInvested() {
			const res = await api.getInvested()
			investedSet(res)

			// platforms
			res?.map(res => !tempPlatforms.includes(res.platform) && tempPlatforms.push(res.platform))
			platformsSet(tempPlatforms)
			// years
			res?.map(res => {
				const year = res.start.match(/\d+/)?.[0] // year-05-01
				if (!tempYears.includes(year)) {
					tempYears.push(year)
				}
				yearsSet(tempYears)
			})
		}

		getInvested()
	}, [])


	return (
		{ invested, platforms, years }
	)
}