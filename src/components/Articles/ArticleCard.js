import React from "react"
import "./index.scss"
import "./media.scss"
import Button from "../../components/FormElements/Button"
import IconText from "../IconText/IconText"
import useArticleLikes from "../../hooks/useArticleLikes"

export default function ArticleCard({ title, img, id, views, likes, tag, cardText }) {

	const { likeCount, likeArticle } = useArticleLikes(id, likes)

	return (
		<div className="articleCard">
			<img src={img} className="articleCard__img" />
			<div className="cardTitle">{title}</div>
			<div className="cardText">{cardText}</div>

			<div className="f g">
				<IconText src={tag} text={tag} iconClassName="icon_small mr05" />
				<IconText src="views" text={views} iconClassName="icon_small mr05" />
				<IconText src="likes" text={likeCount} iconClassName="icon_small mr05" onClick={likeArticle} />
			</div>

			<Button text="Read More" path={`/article/${id}`} btnClassName="btn_sec w100" />
		</div>
	)
}