import React from "react"
import "./index.scss"
import "./media.scss"
import radarInfo from "../../utils/radarInfo"
import RadarInfoItem from "./RadarInfoItem"
import Tags from "../FormElements/Tags"
import Bar from "./Bar"

export default function RadarInfo({ obj }) { // obj=company

	return (
		<section className="postFull mb">

			{radarInfo.map((info, ind) => {
				const { title, text } = info
				const LocalizationArray = obj?.LocalizationArray.split(",")

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
							<Bar currentCompanyName={obj?.name} />
						</RadarInfoItem>
					)
				}

				return <RadarInfoItem title={title} text={text} ind={ind} obj={obj} />

			})}

		</section>
	)
}