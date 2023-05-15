import "./media.scss"
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
import radarClip from "../../img/radarClip.svg"

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);


export default function Radar_({ obj, clipNum }) {

	let Fiabilite, Localization, TVL, Impayes, Liquidity, Commnuaute, Frais, Rendement
	if (obj) {
		({ Fiabilite, Localization, TVL, Impayes, Liquidity, Commnuaute, Frais, Rendement } = obj)
	}

	const total = (Number(Fiabilite) + Number(Localization) + Number(TVL) + Number(Impayes) + Number(Liquidity) + Number(Commnuaute) + Number(Frais) + Number(Rendement)) / 8
	let backgroundColor
	total >= 0 && (backgroundColor = "rgba(244, 0, 0, 0.7)")
	total >= 3 && (backgroundColor = "rgba(224, 81, 20, 0.7)")
	total >= 5 && (backgroundColor = "rgba(246, 207, 0, 0.7)")
	total >= 7 && (backgroundColor = "rgba(88, 169, 7, 0.7)")
	total >= 9 && (backgroundColor = "rgba(117, 235, 0, 0.7)")

	const data = {
		labels: ["Fiabilite", "Localization", "TVL", "Impayes", "Liquidity", "Commnuaute", "Frais", "Rendement"],
		datasets: [
			{
				label: "# of 10",
				data: [
					Fiabilite,
					Localization,
					TVL,
					Impayes,
					Liquidity,
					Commnuaute,
					Frais,
					Rendement
				],
				backgroundColor: backgroundColor,
				borderColor: backgroundColor,
				borderWidth: 1,
				pointBackgroundColor: backgroundColor,
				tension: 0.3
			},
		],
	};

	const options = {
		scales: {
			r: {
				grid: {
					circular: true,
					color: "#333333"
				},
				ticks: {
					display: false
				},
				beginAtZero: true,
				max: 10,
				min: 0
			}
		},
		plugins: {
			legend: {
				display: false
			}
		}
	}

	return (
		<div className="c chart">
			{clipNum >= 0 && <img src={radarClip} className={`radarClip radarClip${clipNum}`} />}
			<Radar data={data} options={options} />
		</div>
	)
}
