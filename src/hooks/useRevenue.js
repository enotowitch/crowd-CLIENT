import useInvested from "./useInvested"

// `company`=`platform`
export default function useRevenue(currentCompanyName) {

	// * labels in Bar.js
	const revenue = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	//  * data in Bar.js
	const revenueData = ["", "", "", "", "", "", "", "", "", "", "", ""]
	//  * Highlight current month
	const revenueHighlight = new Date().getMonth()

	const { invested } = useInvested()
	const curCompanyArr = invested?.filter(invested => invested.platform === currentCompanyName && invested)

	let income = 0
	curCompanyArr?.map(company => {

		const endMonth = Number(company.end.match(/(?:-)(\d+)(?:-)/)[1]) - 1
		income += company.invested * company.income / 100 // 1000*5%/100%
		revenueData[endMonth] = income
		income = 0
	})

	return (
		{ revenue, revenueData, revenueHighlight }
	)
}