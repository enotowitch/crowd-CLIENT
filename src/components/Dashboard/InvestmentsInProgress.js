import React from "react"
import "./index.scss"
import "./media.scss"
import InvesmentItems from "../Investment/InvesmentItems"
import useInvested from "../../hooks/useInvested"
import Pie from "../Charts/Pie"

export default function InvestmentsInProgress({ ignoreClosed, title }) {

	const { invested } = useInvested()

	const uniqCompanies = []
	invested?.map(invested => {
		if (ignoreClosed) {
			if (invested.closed) { return }
		}

		!uniqCompanies.includes(invested.platform) && uniqCompanies.push(invested.platform)
	})

	let arrOfArrs = Array.from({ length: uniqCompanies.length }, (v, i) => []) // generate [[], [], [], []] dep. on uniqCompanies.length

	for (let i = 0; i < uniqCompanies.length; i++) {
		invested?.map(invested => {
			if (ignoreClosed) {
				if (invested.closed) { return }
			}

			if (uniqCompanies[i] === invested.platform) {
				arrOfArrs[i].push(invested)
			}
		})
	}

	// ! pie objs
	let numberOfProjectsObj
	let averageIncomeObj
	let sumInvestedObj

	const companies = arrOfArrs?.map(company => {
		let sumIncome = 0
		let investmentNum = 0
		let sumInvested = 0
		let companyName

		company.map((investment, ind) => {
			sumIncome += Number(investment.income)
			investmentNum = ind + 1
			sumInvested += Number(investment.invested)
			companyName = investment.platform
		})
		const avarageIncome = sumIncome / investmentNum // 50/5=10%; 30/2=15%

		// ! pie objs
		numberOfProjectsObj = { ...numberOfProjectsObj, [companyName]: company.length }
		averageIncomeObj = { ...averageIncomeObj, [companyName]: avarageIncome }
		sumInvestedObj = { ...sumInvestedObj, [companyName]: sumInvested }

		return (
			<InvesmentItems arr={[companyName, company.length, avarageIncome, sumInvested]} />
		)
	})


	return (
		<section className="mb">
			<div className="title2 mb2">{title}</div>

			<InvesmentItems arr={["Platform", "Number of projects", "Average income (%)", "Current invested amount"]} />
			{companies}
			<div className="investmentsInProgress__charts">
				<Pie obj={numberOfProjectsObj} />
				<Pie obj={averageIncomeObj} />
				<Pie obj={sumInvestedObj} />
			</div>
		</section>
	)
}