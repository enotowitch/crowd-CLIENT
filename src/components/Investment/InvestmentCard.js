import React, { useRef } from "react"
import "./index.scss"
import "./media.scss"
import IconsTop from "../Icons/IconsTop"
import IconDelete from "../Icons/IconDelete"
import IconEdit from "../Icons/IconEdit"
import InvesmentItems from "./InvesmentItems"

export default function InvestmentCard({ obj }) {

	const { platform, project, invested, income, start, end, _id: id } = obj
	const cardRef = useRef(null)

	return (
		<div className="card miw100 br0" ref={cardRef}>

			<IconsTop cardRef={cardRef} className="iconsTop">
				<IconEdit id={id} fn="editArticle" />
				<IconDelete id={id} fn="deleteArticle" />
			</IconsTop>

			<InvesmentItems arr={[platform, project, invested, income, start, end]} />

		</div>
	)
}