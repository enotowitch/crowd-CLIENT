import React from "react"
import "./index.scss"
import "./media.scss"
import Radar from "../Charts/Radar"

export default function CompanyCard({ obj }) {

	const { name } = obj

	return (
		<div className="articleCard">
			<div className="tac white">{name}</div>
			<Radar obj={obj} />
		</div>
	)
}