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
	const [company, companySet] = useState([])

	useEffect(() => {
		async function getTVL() {
			const res = await api.getTVL() // [{name: 'company name', TVL: '3'}, {...}]
			companySet(res)
		}

		getTVL()
	}, [])
	// ? getTVL

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

	// ! labels
	let labels = []
	company?.map(item => labels.push(item.name))
	// ! TVLs
	let TVLs = []
	company?.map(item => TVLs.push(item.TVL))
	TVLs.sort((a, b) => a - b)

	// ! color & currentCompanyInd
	let currentCompanyInd
	company?.map((item, ind) => item.name === currentCompanyName && (currentCompanyInd = ind))
	const colorsArr = ["#9327FF", "#9327FF", "#9327FF", "#9327FF", "#9327FF"]
	colorsArr[currentCompanyInd] = "#FF900D"

	const data = {
		labels: [labels[0], labels[1], labels[2], labels[3], labels[4]],
		datasets: [{
			label: "",
			data: [TVLs[0], TVLs[1], TVLs[2], TVLs[3], TVLs[4]],
			backgroundColor: colorsArr,
		}]
	};

	return <Bar options={options} data={data} />;
}