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

	function getColor(value) {
		//value from 0 to 1
		var hue = (value * 120).toString();
		return 'hsl('+hue+', 100%, 50%, 0.7)';
	}

	// total from 0 to 1
	const total = (0.1) * (Number(Fiabilite) + Number(Localization) + Number(TVL) + Number(Impayes) + Number(Liquidity) + Number(Commnuaute) + Number(Frais) + Number(Rendement)) / 8
	let backgroundColor = getColor(total)

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
				borderWidth: 2,
				pointBackgroundColor: backgroundColor,
				tension: 0.3
			},
		],
	};

	const options = {
		scales: {
			r: {
				angleLines: {
					color: "#5b5b5b"
				},
				pointLabels: {
					color: "#999999",
                    font: {
                        size: 11
                    }
				},
				grid: {
					circular: true,
					color: ["#333333", "#474747"]

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
		},
		events: []
	}

	return (
		<div className="c chart">
			{clipNum >= 0 && <img src={radarClip} className={`radarClip radarClip${clipNum}`} />}
			<Radar data={data} options={options} />
		</div>
	)
}
