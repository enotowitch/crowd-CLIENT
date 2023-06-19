import React from "react"
import "./index.scss"
import "./media.scss"
import useInvestments from "../../hooks/useInvestments"
import InvestmentCard from "./InvestmentCard"
import InvesmentItems from "./InvesmentItems"

export default function Investments({ title, closed }) {

	const { investments, showMore } = useInvestments()

	return (
		<div className="cards fc g0 table">
			<div className="title2 w100 m">{title}</div>

			<InvesmentItems arr={["Platform", "Project Name", "Invested (€)", "Income (%)", "Start Date", "End Date"]} />

			{!closed && investments.map(obj => !obj.closed && <InvestmentCard obj={obj} />)}
			{closed && investments.map(obj => obj.closed && <InvestmentCard obj={obj} />)}
		</div>
	)
}