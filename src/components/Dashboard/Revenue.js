import React, { useState } from "react"
import "./index.scss"
import "./media.scss"
import useInvested from "../../hooks/useInvested"
import Select from "../FormElements/Select"
import Bar from "../Charts/Bar"

export default function Revenue() {

	const { platforms, years } = useInvested()
	const [currentCompanyName, setCurrentCompanyName] = useState("")

	return (
		<section className="mb">
			<div className="title mb2">My revenue</div>
			<div className="f mb3">
				<div className="revenue__left">Revenue of the current month</div>
				<div className="revenue__right">123 €</div>
				<div className="revenue__left">Revenue for 2023 year in all platforms</div>
				<div className="revenue__right">123 €</div>
			</div>

			<div className="f jcfe">
				<Select options={platforms} placeholder="Platform" onChange={(e) => setCurrentCompanyName(e.target.value)} />
				<Select options={years} placeholder="Year" />
			</div>

			<Bar currentCompanyName={currentCompanyName} labels="revenue" />
		</section>
	)
}