import React, { useRef } from "react"
import "./index.scss"
import "./media.scss"
import IconsTop from "../Icons/IconsTop"
import IconDelete from "../Icons/IconDelete"
import IconEdit from "../Icons/IconEdit"
import Tags from "../FormElements/Tags"
import ForAdmin from "../Other/ForAdmin"
import CardBottom from "../Other/CardBottom"
import Card from "../Other/Card"

export default function ArticleCard({ title, img, id, views, likes, tags, cardText, postOwner }) {

	const cardRef = useRef(null)

	return (
		<Card cardRef={cardRef} type="article" id={id}>

			<ForAdmin postOwner={postOwner}>
				<IconsTop cardRef={cardRef} className="iconsTop">
					<IconEdit id={id} fn="editArticle" />
					<IconDelete id={id} fn="deleteArticle" />
				</IconsTop>
			</ForAdmin>

			<img src={img} className="card__img" />
			<Tags arr={tags} className="tag bgLight" iconClassName="m0" />
			<div className="cardTitle">{title}</div>
			<div className="cardText">{cardText}</div>

			<CardBottom
				id={id}
				views={views}
				likes={likes}
				clickText="Read more >"
				likePostType="article"
			/>

		</Card>
	)
}