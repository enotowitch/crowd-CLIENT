import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Pie_(props) {

	const { obj, className } = props

	let objLabels, objData
	if (obj) {
		objLabels = Object.keys(obj)
		objData = Object.values(obj)
	}

	const data = {
		labels: objLabels,
		datasets: [
			{
				label: '',
				data: objData,
				// todo colors
				backgroundColor: [
					'#FF900D',
					'#9327FF',
					'DeepSkyBlue',
					'Olive',
					'Aqua',
					'Green',
					'Purple',
					'Yellow',
					'Teal',
					'Navy'
				],
				borderWidth: 0
			},
		],
	};

	return (
		<div className={`pie mb ${className}`}>
			<Pie data={data} />
		</div>
	);
}