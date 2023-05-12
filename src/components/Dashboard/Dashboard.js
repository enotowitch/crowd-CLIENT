import React from "react"
import "./index.scss"
import "./media.scss"
import Revenue from "./Revenue"
import InvestmentsInProgress from "./InvestmentsInProgress"
import ValuationOfInvestment from "./ValuationOfInvestment"

export default function Dashboard() {
	return (
		<div className="fc w100">
			<ValuationOfInvestment />
			<Revenue />
			<InvestmentsInProgress />
		</div>
	)
}