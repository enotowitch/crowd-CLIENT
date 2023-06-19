import React, { useRef } from "react"
import "./index.scss"
import "./media.scss"
import IconsTop from "../Icons/IconsTop"
import IconDelete from "../Icons/IconDelete"
import IconEdit from "../Icons/IconEdit"
import InvesmentItems from "./InvesmentItems"
import IconRemove from "../Icons/IconRemove"

export default function InvestmentCard({ obj }) {

	const { platform, project, invested, income, start, end, _id: id } = obj
	const cardRef = useRef(null)

	return (
		<div className="card miw100 br0 ml mr" ref={cardRef}>

			<IconsTop cardRef={cardRef} className="iconsTop g jcfe">
				<IconRemove id={id} fn="removeInvestment" />
				<IconEdit id={id} fn="editInvestment" />
				<IconDelete id={id} fn="deleteInvestment" />
			</IconsTop>

			<InvesmentItems arr={[platform, project, invested, income, start, end]} />

		</div>
	)
}