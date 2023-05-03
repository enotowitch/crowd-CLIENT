import React from "react"
import "./index.scss"
import "./media.scss"
import radarInfo from "../../utils/radarInfo"
import Radar from "./Radar"

export default function RadarInfo({ obj }) {

	return (
		<section className="postFull mb">

			{radarInfo.map((info, ind) => (
				<>
					<div className="title2 white">{info.title}</div>
					<div className="gray">{info.text}</div>

					<Radar key={ind} obj={obj} clipNum={ind} />
				</>
			))}

		</section>
	)
}