import { useEffect, useState } from "react"
import * as api from "../api"

export default function useCompanies() {

	const [companies, companiesSet] = useState()

	useEffect(() => {
		async function getCompanies() {
			const res = await api.getCompanies()
			companiesSet(res)
		}

		getCompanies()
	}, [])

	return (
		{ companies }
	)
}