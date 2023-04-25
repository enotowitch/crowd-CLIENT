import React from "react"
import "./index.scss"
import "./media.scss"
import IconText from "../IconText/IconText"
import useArticleLikes from "../../hooks/useArticleLikes"

export default function ArticleCard({ title, img, id, views, likes, tag, cardText }) {

	const { likeCount, likeArticle } = useArticleLikes(id, likes)

	return (
		<div className="articleCard">
			<img src={img} className="articleCard__img" />
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