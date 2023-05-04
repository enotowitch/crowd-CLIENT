import React, { useEffect, useState } from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import * as api from "../../api"

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export default function Bar_({ currentCompanyName }) {

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

	// ! options
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: false,
				text: '',
			},
		},
	};
	// ! data
	const data = {
		labels: [arrLess[0]?.name, arrLess[arrLess.length - 1]?.name, currentCompany?.name, arrMore[0]?.name, arrMore[arrMore.length - 1]?.name],
		datasets: [{
			label: "",
			data: [arrLess[0]?.TVL, arrLess[arrLess.length - 1]?.TVL, currentCompany?.TVL, arrMore[0]?.TVL, arrMore[arrMore.length - 1]?.TVL],
			backgroundColor: [
				"#9327FF",
				"#9327FF",
				"#FF900D",
				"#9327FF",
				"#9327FF",
			],
		}]
	};

	return <Bar options={options} data={data} />;
}