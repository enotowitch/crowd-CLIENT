import { useContext, useEffect, useState } from "react"
import * as api from "../api"
import { Context } from "../Context"

export default function useCompanyFull(companyId) {

	const [company, companySet] = useState()

	useEffect(() => {
		async function getCompany() {
			const res = await api.getCompany(companyId)
			companySet(res)
		}

		getCompany()
	}, [])

	// * companyId user is watching now (for edit company)
	const { watchingPostSet } = useContext(Context)
	watchingPostSet(companyId)


	return (
		{ company }
	)
}