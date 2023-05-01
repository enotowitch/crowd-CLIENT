import React from "react";
import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);


export default function Radar_({ obj }) {

	const data = {
		labels: ["Fiabilite", "Localization", "TVL", "Impayes/Retards", "Liquidity", "Commnuaute", "Frais", "Rendement"],
		datasets: [
			{
				label: "# of Votes",
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
				backgroundColor: "rgba(255, 99, 132, 0.2)",
				borderColor: "rgba(255, 99, 132, 1)",
				borderWidth: 1,
			},
		],
	};

	return (
		<div className="w50 c">
			<Radar data={data} />
		</div>
	)
}
