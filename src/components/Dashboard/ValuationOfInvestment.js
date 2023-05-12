import React from "react"
import "./index.scss"
import "./media.scss"
import Doughnut from "../Charts/Doughnut"

export default function ValuationOfInvestment() {
	return (
		<section className="mb">
			<div className="title mb3">Valuation of my investment</div>

			<div className="f jcse">
				<Doughnut />
				<div className="fc jcse p">
					<div>It is advisable to distribute your money on more projects</div>
					<div>Project on unreliable platforms</div>
					<div>Your projects are performing well</div>
				</div>
			</div>
		</section>
	)
}