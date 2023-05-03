import React, { useRef } from "react"
import "./index.scss"
import "./media.scss"
import IconText from "../Icons/IconText"
import useArticleLikes from "../../hooks/useArticleLikes"
import edit from "../../img/edit.svg"
import IconsTop from "../Icons/IconsTop"
import IconDelete from "../Icons/IconDelete"

export default function ArticleCard({ title, img, id, views, likes, tag, cardText }) {

	const { likeCount, likeArticle } = useArticleLikes(id, likes)
	const cardRef = useRef(null)

	return (
		<div className="card" ref={cardRef}>

			<IconsTop cardRef={cardRef} className="iconsTop">
				<img src={edit} onClick={() => window.location.href = `edit/${id}`} />
				<IconDelete id={id} fn="deleteArticle" />
			</IconsTop>

			<img src={img} className="card__img" />
			<IconText src={tag} text={tag} iconClassName="icon_small mr05" />
			<div className="cardTitle">{title}</div>
			<div className="cardText">{cardText}</div>

			<div className="f g jcsb">
				<div className="f g">
					<IconText src="views" text={views} iconClassName="icon_small mr05" />
					<IconText src="likes" text={likeCount} iconClassName="icon_small mr05" onClick={likeArticle} />
				</div>
				<IconText text="Read more >" className="brand" path={`/article/${id}`} />
			</div>

		</div>
	)
}