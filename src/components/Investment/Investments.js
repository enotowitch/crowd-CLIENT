import React from "react"
import "./index.scss"
import "./media.scss"
import useInvestments from "../../hooks/useInvestments"
import InvestmentCard from "./InvestmentCard"
import InvesmentItems from "./InvesmentItems"

export default function Investments() {

	const { investments, showMore } = useInvestments()

	return (
		<section className="cards fc g0">
			<div className="title w100">Investments</div>

			<InvesmentItems arr={["Platform", "Project Name", "Amount Invested", "Income", "Start Date", "End Date"]} />

			{investments.map(obj => <InvestmentCard obj={obj} />)}
		</section>
	)
}