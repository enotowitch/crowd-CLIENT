export default function radarInfo(obj) {
	return [
		{
			title: "Rendement",
			text: obj?.RendementText
		},
		{
			title: "Fiabilite",
			text: obj?.FiabiliteText
		},
		{
			title: "Localization",
			text: obj?.LocalizationText
		},
		{
			title: "TVL",
			text: obj?.TVLText
		},
		{
			title: "Impayes",
			text: obj?.ImpayesText
		},
		{
			title: "Liquidity",
			text: obj?.LiquidityText
		},
		{
			title: "Commnuaute",
			text: obj?.CommnuauteText
		},
		{
			title: "Frais",
			text: obj?.FraisText
		},
	]
}
