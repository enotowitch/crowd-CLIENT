import React, { useRef } from "react"
import "./index.scss"
import "./media.scss"
import IconsTop from "../Icons/IconsTop"
import IconDelete from "../Icons/IconDelete"
import IconEdit from "../Icons/IconEdit"
import IconText from "../Icons/IconText"
import { baseURL } from "../../consts"
import ForAdmin from "../Other/ForAdmin"
import CardBottom from "../Other/CardBottom"
import Card from "../Other/Card"
import Tags from "../FormElements/Tags"
import parseTags from "../../utils/parseTags"

export default function BonusCard({ obj }) {

	let id, name, text, img, likes, tags, user
	if (obj) {
		({ _id: id, name, text, img, likes, tags, user } = obj)
	}

	const cardRef = useRef(null)

	return (
		<Card cardRef={cardRef} type="bonus" id={id}>

			<ForAdmin postOwner={user}>
				<IconsTop cardRef={cardRef} className="iconsTop">
					<IconEdit id={id} fn="editBonus" />
					<IconDelete id={id} fn="deleteBonus" />
				</IconsTop>
			</ForAdmin>

			<IconText
				url={`${baseURL}/upload/${img}`}
				iconClassName="icon_small3"
				// text={name}
				textClassName="title2 white"
			/>
			<div>{text}</div>

			<Tags arr={parseTags(tags)} className="tag bgLight" />

			<CardBottom
				id={id}
				likes={likes?.length}
				clickText="Get bonus >"
				likePostType="bonus"
				hideViews={true}
			/>

		</Card>
	)
}