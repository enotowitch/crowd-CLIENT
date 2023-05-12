import React from "react"
import "./index.scss"
import "./media.scss"
import InvesmentItems from "../Investment/InvesmentItems"
import useInvested from "../../hooks/useInvested"

export default function InvestmentsInProgress() {

	const { invested } = useInvested()

	const uniqCompanies = []
	invested?.map(invested => {
		if (!invested.closed) {
			!uniqCompanies.includes(invested.platform) && uniqCompanies.push(invested.platform)
		}
	})

	let arrOfArrs = Array.from({ length: uniqCompanies.length }, (v, i) => []) // generate [[], [], [], []] dep. on uniqCompanies.length

	for (let i = 0; i < uniqCompanies.length; i++) {
		invested?.map(invested => {
			if (!invested.closed) {
				if (uniqCompanies[i] === invested.platform) {
					arrOfArrs[i].push(invested)
				}
			}
		})
	}

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

		return (
			<InvesmentItems arr={[companyName, company.length, avarageIncome, sumInvested]} />
		)
	})


	return (
		<section>
			<div className="title2 mb2">Investments in progress</div>

			<InvesmentItems arr={["Platform", "Number of projects", "Average income (%)", "Current invested amount"]} />
			{companies}
		</section>
	)
}