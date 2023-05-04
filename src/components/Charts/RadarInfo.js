import React from "react"
import "./index.scss"
import "./media.scss"
import radarInfo from "../../utils/radarInfo"
import RadarInfoItem from "./RadarInfoItem"
import Tags from "../FormElements/Tags"

export default function RadarInfo({ obj }) {

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
				} else {
					return <RadarInfoItem title={title} text={text} ind={ind} obj={obj} />
				}

			})}

		</section>
	)
}