import React from "react"
import "./index.scss"
import "./media.scss"
import radarInfo from "../../utils/radarInfo"
import RadarInfoItem from "./RadarInfoItem"
import Tags from "../FormElements/Tags"
import Bar from "./Bar"
import Pie from "./Pie"

export default function RadarInfo({ obj }) { // obj=company

	const notShow = []
	if (obj) {
		const titles = Object.keys(obj)
		const values = Object.values(obj)
		values.map((value, ind) => !value && notShow.push(titles[ind]))
	}

	return (
		<div className="postFull mb">

			{radarInfo.map((info, ind) => {
				const { title, text } = info
				const LocalizationArray = obj?.LocalizationArray && obj?.LocalizationArray.split(",")

				if (notShow.includes(title)) {
					return // * don't show empty titles 
				}

				if (title === "Localization") {
					return (
						<RadarInfoItem title={title} text={text} ind={ind} obj={obj}>
							{LocalizationArray && <Tags arr={LocalizationArray} />}
						</RadarInfoItem>
					)
				}

				if (title === "TVL") {
					return (
						<RadarInfoItem title={title} text={text} ind={ind} obj={obj}>
							<Bar currentCompanyName={obj?.name} />
						</RadarInfoItem>
					)
				}

				if (title === "Impayes") {
					return (
						<RadarInfoItem title={title} text={text} ind={ind} obj={obj}>
							<Pie obj={{ paid: obj?.Impayes, "un paid": 10 - Number(obj?.Impayes) }} />
						</RadarInfoItem>
					)
				}

				if (title === "Frais") {
					return (
						<RadarInfoItem title={title} text={text} ind={ind} obj={obj}>
							{obj?.FraisObj && <Pie obj={obj?.FraisObj} />}
						</RadarInfoItem>
					)
				}

				return <RadarInfoItem title={title} text={text} ind={ind} obj={obj} />

			})}

		</div>
	)
}