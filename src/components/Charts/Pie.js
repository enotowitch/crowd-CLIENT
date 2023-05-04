import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Pie_({ paid }) {

	const unPaid = 10 - Number(paid)

	const data = {
		labels: ['Unpaid', 'paid'],
		datasets: [
			{
				label: '',
				data: [unPaid, paid],
				backgroundColor: [
					'#FF900D',
					'#9327FF'
				]
			},
		],
	};

	return (
		<div className="pie c">
			<Pie data={data} />
		</div>
	);
}