import React, { useRef } from "react"
import "./index.scss"
import "./media.scss"
import Radar from "../Charts/Radar"
import IconText from "../Icons/IconText"
import IconsTop from "../Icons/IconsTop"
import { baseURL } from "../../consts"

export default function CompanyCard({ obj }) {

	const { name, img, _id: id } = obj
	const cardRef = useRef(null)

	return (
		<div className="card" ref={cardRef}>

			<IconsTop cardRef={cardRef} className="iconsMid">
				<IconText
					url={`${baseURL}/upload/${img}`}
					iconClassName="icon_mid"
					text="See review >"
					textClassName="brand"
					onClick={() => window.location.href = `company/${id}`}
				/>
			</IconsTop>

			<div className="tac white">{name}</div>
			<Radar obj={obj} />
		</div>
	)
}