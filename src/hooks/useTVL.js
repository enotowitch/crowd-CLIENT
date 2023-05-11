import { useEffect, useState } from 'react';
import * as api from "../api"

export default function useTVL(currentCompanyName) {

	// ! getTVL
	const [companies, companiesSet] = useState([])

	useEffect(() => {
		async function getTVL() {
			const res = await api.getTVL() // [{name: 'company name', TVL: '3'}, {...}]
			companiesSet(res)
		}

		getTVL()
	}, [])
	// ? getTVL

	// 1. find currentCompanyTVL
	let currentCompanyTVL
	companies?.map(item => item.name === currentCompanyName && (currentCompanyTVL = item.TVL))

	// 2. arrLess & arrMore: 
	// * `final arr` = [arrLess[first],arrLess[last],currentCompany,arrMore[first],arrMore[last]]
	let arrLess = []
	let arrMore = []
	companies?.map(item => Number(item.TVL) < currentCompanyTVL && arrLess.push(item))
	companies?.map(item => Number(item.TVL) > currentCompanyTVL && arrMore.push(item))
	arrLess.sort((a, b) => a.TVL - b.TVL)
	arrMore.sort((a, b) => a.TVL - b.TVL)

	let currentCompany
	companies?.map(item => item.name === currentCompanyName && (currentCompany = item))

	// * labels in Bar.js
	const tvl = [arrLess[0]?.name, arrLess[arrLess.length - 1]?.name, currentCompany?.name, arrMore[0]?.name, arrMore[arrMore.length - 1]?.name]
	//  * data in Bar.js
	const tvlData = [arrLess[0]?.TVL, arrLess[arrLess.length - 1]?.TVL, currentCompany?.TVL, arrMore[0]?.TVL, arrMore[arrMore.length - 1]?.TVL]
	//  * Highlight current Company name
	const tvlHighlight = tvl.indexOf(currentCompany?.name)

	return (
		{ tvl, tvlData, tvlHighlight }
	)
}