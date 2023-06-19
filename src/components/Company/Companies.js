import React from "react"
import "./index.scss"
import "./media.scss"
import usePosts from "../../hooks/usePosts"
import CompanyCard from "./CompanyCard"
import ShowMoreButtons from "../FormElements/ShowMoreButtons"
import Cards from "../Other/Cards"

export default function Companies({ skip }) {

	const [companies, showMore] = usePosts(skip, "company")

	return (
		<Cards>
			<div className="title w100">Crowdfundings</div>
			{companies?.map(company => <CompanyCard key={company?._id} obj={company} />)}
			<ShowMoreButtons showMore={showMore} path="companies" />
		</Cards>
	)
}