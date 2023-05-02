import React from "react"
import "./index.scss"
import "./media.scss"
import useCompanies from "../../hooks/useCompanies"
import CompanyCard from "./CompanyCard"

export default function Companies() {

	const { companies } = useCompanies()

	return (
		<section className="articles">
			{companies?.map(company => <CompanyCard key={company._id} obj={company} />)}
		</section>
	)
}