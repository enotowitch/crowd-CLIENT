import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Doughnut_({ className }) {

	const notBlack = 72
	const black = 100 - notBlack

	const data = {
		labels: [""],
		datasets: [
			{
				label: "",
				data: [notBlack, black],
				backgroundColor: [
					"#FF900D",
					"000000",
					"rgba(255, 206, 86, 0.2)",
					"rgba(75, 192, 192, 0.2)",
					"rgba(153, 102, 255, 0.2)",
					"rgba(255, 159, 64, 0.2)"
				],
				borderWidth: 0,
			}
		]
	};

	const options = {
		cutout: "85%",
		plugins: {
			legend: {
				display: false
			},
			title: {
				display: false
			},
		},
	};

	return (
		<div className={`doughnut ${className}`}>
			<Doughnut data={data} options={options} />
		</div>
	)
}
