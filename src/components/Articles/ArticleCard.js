import React, { useRef } from "react"
import "./index.scss"
import "./media.scss"
import IconText from "../Icons/IconText"
import useArticleLikes from "../../hooks/useArticleLikes"
import IconsTop from "../Icons/IconsTop"
import IconDelete from "../Icons/IconDelete"
import IconEdit from "../Icons/IconEdit"
import Tags from "../FormElements/Tags"

export default function ArticleCard({ title, img, id, views, likes, tags, cardText }) {

	const { likeCount, likeArticle } = useArticleLikes(id, likes)
	const cardRef = useRef(null)

	return (
		<div className="card" ref={cardRef} onClick={() => window.location.href = `/article/${id}`}>

			<IconsTop cardRef={cardRef} className="iconsTop">
				<IconEdit id={id} fn="editArticle" />
				<IconDelete id={id} fn="deleteArticle" />
			</IconsTop>

			<img src={img} className="card__img" />
			<Tags arr={tags} className="tag bgLight" iconClassName="m0" />
			<div className="cardTitle">{title}</div>
			<div className="cardText">{cardText}</div>

			<div className="f g jcsb">
				<div className="f g">
					<IconText src="views" text={views} iconClassName="icon_small mr05" />
					<IconText src="likes" text={likeCount} iconClassName="icon_small mr05" onClick={likeArticle} />
				</div>
				<IconText text="Read more >" className="brand" />
			</div>

		</div>
	)
}