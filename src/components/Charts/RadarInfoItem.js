import React from "react"
import "./index.scss"
import "./media.scss"
import Radar from "./Radar"

export default function RadarInfoItem({ title, text, ind, obj, children }) {
	return (
		<section>
			<div className="title2 white">{title}</div>
			{children}
			<div className="gray">{text}</div>

			<Radar key={ind} obj={obj} clipNum={ind} />
		</section>
	)
}