export default function useRevenue() {

	// * labels in Bar.js
	const revenue = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	//  * data in Bar.js
	const revenueData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	//  * Highlight current month
	const revenueHighlight = new Date().getMonth()

	return (
		{ revenue, revenueData, revenueHighlight }
	)
}