import React, { useRef } from "react"
import "./index.scss"
import "./media.scss"
import Radar from "../Charts/Radar"
import IconText from "../Icons/IconText"
import IconsTop from "../Icons/IconsTop"
import { baseURL } from "../../consts"
import IconDelete from "../Icons/IconDelete"
import IconEdit from "../Icons/IconEdit"
import ForAdmin from "../Other/ForAdmin"
import Card from "../Other/Card"

export default function CompanyCard({ obj }) {

	let name, img, id, user
	if (obj) {
		({ name, img, _id: id, user } = obj)
	}
	const cardRef = useRef(null)

	// ! NOT FOR PRODUCTION; for portfolio: show images from FRONT; BACK is free => images disappear
	let url = `${baseURL}/upload/${img}`
	const frontImgs = ["october", "raizers", "heavyFinance", "lumo", "monego", "fundimmo", "clubfunding", "baltis"]
	const imgName = img.replace(/.\png/, "")
	if (frontImgs.includes(imgName)) {
		url = require(`../../img/${imgName}.png`)
	}
	// ? NOT FOR PRODUCTION

	return (
		<Card cardRef={cardRef} type="company" id={id}>

			<IconsTop cardRef={cardRef} className="iconsMid w100">
				<IconText
					url={url}
					iconClassName="m0 icon_card"
					text="See review >"
					textClassName="brand"
					className="fc"
					onClick={() => window.location.href = `/company/${id}`}
				/>
			</IconsTop>

			<ForAdmin postOwner={user}>
				<IconsTop cardRef={cardRef} className="iconsTop">
					<IconEdit id={id} fn="editCompany" />
					<IconDelete id={id} fn="deleteCompany" />
				</IconsTop>
			</ForAdmin>

			<div className="tac white">{name}</div>
			<Radar obj={obj} />
		</Card>
	)
}