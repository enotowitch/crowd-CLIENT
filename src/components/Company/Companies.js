import React from "react"
import "./index.scss"
import "./media.scss"
import useCompanies from "../../hooks/useCompanies"
import CompanyCard from "./CompanyCard"
import ShowMore from "../FormElements/ShowMore"

export default function Companies() {

	const { companies, showMore } = useCompanies()

	return (
		<section className="cards">
			{companies?.map(company => <CompanyCard key={company._id} obj={company} />)}

			<ShowMore onClick={showMore} className="asc" />
		</section>
	)
}