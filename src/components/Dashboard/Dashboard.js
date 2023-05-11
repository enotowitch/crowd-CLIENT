import React from "react"
import "./index.scss"
import "./media.scss"
import Doughnut from "../Charts/Doughnut"
import Select from "../FormElements/Select"
import Bar from "../Charts/Bar"

export default function Dashboard() {
	return (
		<div className="fc w100">
			<section>
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

			<section>
				<div className="title white mb2">My revenue</div>
				<div className="f mb3">
					<div className="revenue__left">Revenue of the current month</div>
					<div className="revenue__right">123 €</div>
					<div className="revenue__left">Revenue for 2023 year in all platforms</div>
					<div className="revenue__right">123 €</div>
				</div>

				<div className="f jcfe">
					<Select options={[1, 2]} placeholder="Platform" />
					<Select options={[1, 2]} placeholder="Year" />
				</div>

				<Bar labels="revenue" />
			</section>
		</div>
	)
}