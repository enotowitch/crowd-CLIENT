import { useEffect, useState } from "react"
import * as api from "../api"

export default function useInvested() {

	const [invested, investedSet] = useState()
	const tempPlatforms = []
	const [platforms, platformsSet] = useState([])

	useEffect(() => {
		async function getInvested() {
			const res = await api.getInvested()
			investedSet(res)

			res?.map(res => !tempPlatforms.includes(res.platform) && tempPlatforms.push(res.platform))
			platformsSet(tempPlatforms)
		}

		getInvested()
	}, [])


	return (
		{ invested, platforms }
	)
}