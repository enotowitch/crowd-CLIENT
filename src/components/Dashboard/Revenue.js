import React, { useState } from "react"
import "./index.scss"
import "./media.scss"
import useInvested from "../../hooks/useInvested"
import Select from "../FormElements/Select"
import Bar from "../Charts/Bar"

export default function Revenue() {

	const { platforms, years, revenueCurMonth, revenueCurYear } = useInvested()
	const [currentCompanyName, currentCompanyNameSet] = useState("")
	const thisYear = new Date().getFullYear()
	const [yearSelected, yearSelectedSet] = useState(thisYear)

	return (
		<section className="mb">
			<div className="title mb2">My revenue</div>
			<div className="f mb3">
				<div className="revenue__left">Revenue of the current month</div>
				<div className="revenue__right">{revenueCurMonth} €</div>
				<div className="revenue__left">Revenue for {new Date().getFullYear()} year in all platforms</div>
				<div className="revenue__right">{revenueCurYear} €</div>
			</div>

			<div className="f g jcfe">
				<Select options={platforms} placeholder="Platform" def="all platforms" onChange={(e) => currentCompanyNameSet(e.target.value)} />
				<Select options={years} placeholder="choose year" def={thisYear} onChange={(e) => yearSelectedSet(e.target.value)} />
			</div>

			<Bar currentCompanyName={currentCompanyName} yearSelected={yearSelected} labels="revenue" />
		</section>
	)
}