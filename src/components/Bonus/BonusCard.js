import React, { useRef } from "react"
import "./index.scss"
import "./media.scss"
import IconsTop from "../Icons/IconsTop"
import IconDelete from "../Icons/IconDelete"
import IconEdit from "../Icons/IconEdit"
import Button from "../FormElements/Button"
import IconText from "../Icons/IconText"
import { baseURL } from "../../consts"

export default function BonusCard({ obj }) {

	const { _id: id, name, text, img } = obj
	const cardRef = useRef(null)

	return (
		<div className="card" ref={cardRef} onClick={() => window.location.href = `/bonus/${id}`}>

			<IconsTop cardRef={cardRef} className="iconsTop">
				<IconEdit id={id} fn="editBonus" />
				<IconDelete id={id} fn="deleteBonus" />
			</IconsTop>

			<IconText
				url={`${baseURL}/upload/${img}`}
				iconClassName="icon_small3"
				text={name}
				textClassName="title2 white"
			/>
			<div>{text}</div>

			<Button text="Get The Bonus" btnClassName="c btn_light" />

		</div>
	)
}