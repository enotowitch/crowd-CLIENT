import React, { useRef } from "react"
import "./index.scss"
import "./media.scss"
import Radar from "../Charts/Radar"
import IconText from "../Icons/IconText"
import IconsTop from "../Icons/IconsTop"

export default function CompanyCard({ obj }) {

	const { name } = obj
	const cardRef = useRef(null)

	return (
		<div className="card" ref={cardRef}>

			<IconsTop cardRef={cardRef} className="iconsMid">
				<IconText text="See review >" textClassName="brand" />
			</IconsTop>

			<div className="tac white">{name}</div>
			<Radar obj={obj} />
		</div>
	)
}