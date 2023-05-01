import React from "react";
import {
	Chart as ChartJS,
	RadialLinearScale,
	ArcElement,
	Tooltip,
	Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);


export default function Polar({ obj }) {

	const data = {
		labels: ["Fiabilite", "Localization", "TVL", "Impayes/Retards", "Liquidity", "Commnuaute", "Frais", "Rendement"],
		datasets: [
			{
				label: "# of 10",
				data: [
					obj?.["Fiabilite"],
					obj?.["Localization"],
					obj?.["TVL"],
					obj?.["Impayes/Retards"],
					obj?.["Liquidity"],
					obj?.["Commnuaute"],
					obj?.["Frais"],
					obj?.["Rendement"]
				],
				backgroundColor: [
					"rgba(255, 99, 132, 0.8)",
					"rgba(54, 162, 235, 0.8)",
					"rgba(255, 206, 86, 0.8)",
					"rgba(75, 192, 192, 0.8)",
					"rgba(153, 102, 255, 0.8)",
					"rgba(255, 159, 64, 0.8)",
					"rgba(100, 159, 164, 0.8)",
					"rgba(124, 252, 0, 0.8)",
				],
				borderWidth: 0,
			},
		],
	};

	return (
		<div className="w50 c">
			<PolarArea data={data} />
		</div>
	)
}
