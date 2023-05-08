import React, { useRef } from "react"
import "./index.scss"
import "./media.scss"
import Radar from "../Charts/Radar"
import IconText from "../Icons/IconText"
import IconsTop from "../Icons/IconsTop"
import { baseURL } from "../../consts"
import IconDelete from "../Icons/IconDelete"
import IconEdit from "../Icons/IconEdit"

export default function CompanyCard({ obj }) {

	const { name, img, _id: id } = obj
	const cardRef = useRef(null)

	return (
		<div className="card" ref={cardRef} onClick={() => window.location.href = `/company/${id}`}>

			<IconsTop cardRef={cardRef} className="iconsMid">
				<IconText
					url={`${baseURL}/upload/${img}`}
					iconClassName="icon_mid"
					text="See review >"
					textClassName="brand"
					onClick={() => window.location.href = `/company/${id}`}
				/>
			</IconsTop>

			<IconsTop cardRef={cardRef} className="iconsTop">
				<IconEdit id={id} fn="editCompany" />
				<IconDelete id={id} fn="deleteCompany" />
			</IconsTop>

			<div className="tac white">{name}</div>
			<Radar obj={obj} />
		</div>
	)
}