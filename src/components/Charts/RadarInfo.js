import React from "react"
import "./index.scss"
import "./media.scss"
import radarInfo from "../../utils/radarInfo"
import RadarInfoItem from "./RadarInfoItem"
import Tags from "../FormElements/Tags"
import Bar from "./Bar"
import Pie from "./Pie"
import IconText from "../Icons/IconText"
import Certification from "../Other/Certification"

export default function RadarInfo({ obj }) { // obj=company

	const notShow = []
	if (obj) {
		const titles = Object.keys(obj)
		const values = Object.values(obj)
		values.map((value, ind) => !value && notShow.push(titles[ind]))
	}

	return (
		<div className="postFull mb">

			{radarInfo(obj).map((info, ind) => {
				const { title, text } = info
				const LocalizationArray = obj?.LocalizationArray && obj?.LocalizationArray.split(",")

				if (notShow.includes(title)) {
					return // * don't show empty titles 
				}

				if (title === "Fiabilite") {
					return (
						<RadarInfoItem title={title} text={text} ind={ind} obj={obj}>
							<Certification obj={obj} />
						</RadarInfoItem>
					)
				}

				if (title === "Localization") {
					return (
						<RadarInfoItem title={title} text={text} ind={ind} obj={obj}>
							<Tags arr={LocalizationArray} />
						</RadarInfoItem>
					)
				}

				if (title === "TVL") {
					return (
						<RadarInfoItem title={title} text={text} ind={ind} obj={obj}>
							<Bar currentCompanyName={obj?.name} labels="tvl" />
						</RadarInfoItem>
					)
				}

				if (title === "Impayes") {
					return (
						<RadarInfoItem title={title} text={text} ind={ind} obj={obj}>
							<Pie obj={{ paid: obj?.Impayes, "un paid": 10 - Number(obj?.Impayes) }} className="c" />
						</RadarInfoItem>
					)
				}

				if (title === "Liquidity") {
					return (
						<RadarInfoItem title={title} text={text} ind={ind} obj={obj}>
							{obj?.["Secondary Step"] === true && <IconText src="check" iconClassName="icon_small" text="Secondary step" className="my c tag" />}
						</RadarInfoItem>
					)
				}

				if (title === "Frais") {
					return (
						<RadarInfoItem title={title} text={text} ind={ind} obj={obj}>
							{obj?.FraisObj && <Pie obj={obj?.FraisObj} className="c" />}
						</RadarInfoItem>
					)
				}

				return <RadarInfoItem title={title} text={text} ind={ind} obj={obj} />

			})}

		</div>
	)
}