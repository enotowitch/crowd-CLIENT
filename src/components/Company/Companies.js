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
			<div className="title w100">Crowdfunding Discovery</div>

			{companies?.map(company => <CompanyCard key={company._id} obj={company} />)}

			<ShowMore onClick={showMore} className="asc" />
		</section>
	)
}