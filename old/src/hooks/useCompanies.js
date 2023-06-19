import { useEffect, useState } from "react"
import * as api from "../api"
import useSkip from "./useSkip"
import hideShowMore from "../utils/hideShowMore"

export default function useCompanies() {

	const [companies, companiesSet] = useState([])
	const { skip, showMore } = useSkip()

	useEffect(() => {
		async function getCompanies() {
			const res = await api.getCompanies(skip)
			hideShowMore(res)
			companiesSet(prev => [...prev, ...res])
		}

		getCompanies()
	}, [skip])

	return (
		{ companies, showMore }
	)
}