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

export default function Bar_({ currentCompanyName, labels, yearSelected }) { // * labels="tvl" data=${labels}+"Data" => "tvlData" (eval)

	// * gray cause of eval
	const { tvl, tvlData, tvlHighlight } = useTVL(currentCompanyName)
	const { revenue, revenueData, revenueHighlight } = useRevenue(currentCompanyName, yearSelected)
	const thisYear = new Date().getFullYear()

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
		labels: eval(`${labels}`), // e.g "revenue"
		datasets: [{
			label: "",
			data: eval(`${labels + "Data"}`), // e.g "revenueData"
			backgroundColor: eval(`${labels}`).map((item, ind) => {
				// color only thisYear-thisMonth
				return ind === eval(`${labels + "Highlight"}`) && yearSelected == thisYear ? "#FF900D" : "#9327FF"
			}), // e.g "revenueHighlight"
		}]
	};

	return <Bar options={options} data={data} />;
}