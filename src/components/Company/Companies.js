import React from "react"
import "./index.scss"
import "./media.scss"
import useCompanies from "../../hooks/useCompanies"
import CompanyCard from "./CompanyCard"
import ShowMoreButtons from "../FormElements/ShowMoreButtons"
import Cards from "../Other/Cards"

export default function Companies() {

	const { companies, showMore } = useCompanies()

	return (
		<Cards>
			<div className="title w100">Crowdfunding Discovery</div>
			{companies?.map(company => <CompanyCard key={company._id} obj={company} />)}
			<ShowMoreButtons showMore={showMore} />
		</Cards>
	)
}