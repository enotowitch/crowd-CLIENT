import React from 'react';
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
import useTVL from '../../hooks/useTVL';
import useRevenue from '../../hooks/useRevenue';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export default function Bar_({ currentCompanyName, labels }) { // * labels="tvl" data=${labels}+"Data" => "tvlData" (eval)

	const { tvl, tvlData, tvlHighlight } = useTVL(currentCompanyName)
	const { revenue, revenueData, revenueHighlight } = useRevenue(currentCompanyName)

	// ! options
	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
				display: false
			},
			title: {
				display: false,
				text: '',
			},
		},
	};
	// ! data
	const data = {
		labels: eval(`${labels}`),
		datasets: [{
			label: "",
			data: eval(`${labels + "Data"}`),
			backgroundColor: eval(`${labels}`).map((item, ind) => ind === eval(`${labels + "Highlight"}`) ? "#FF900D" : "#9327FF"),
		}]
	};

	return <Bar options={options} data={data} />;
}