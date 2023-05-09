import React, { useRef } from "react"
import "./index.scss"
import "./media.scss"
import IconText from "../Icons/IconText"
import useArticleLikes from "../../hooks/useArticleLikes"
import IconsTop from "../Icons/IconsTop"
import IconDelete from "../Icons/IconDelete"
import IconEdit from "../Icons/IconEdit"
import Button from "../FormElements/Button"

export default function BonusCard({ obj }) {

	const { _id: id, name, text } = obj
	const cardRef = useRef(null)

	return (
		<div className="card" ref={cardRef} onClick={() => window.location.href = `/bonus/${id}`}>

			<IconsTop cardRef={cardRef} className="iconsTop">
				<IconEdit id={id} fn="editBonus" />
				<IconDelete id={id} fn="deleteBonus" />
			</IconsTop>

			<div className="title2 white">{name}</div>
			<div>{text}</div>

			<Button text="Get The Bonus" />

		</div>
	)
}