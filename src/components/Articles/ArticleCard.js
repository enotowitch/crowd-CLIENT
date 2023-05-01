import React, { useState } from "react"
import "./index.scss"
import "./media.scss"
import IconText from "../Icons/IconText"
import useArticleLikes from "../../hooks/useArticleLikes"
import edit from "../../img/edit.svg"
import del from "../../img/del.svg"
import useArticle from "../../hooks/useArticle"

export default function ArticleCard({ title, img, id, views, likes, tag, cardText }) {

	const { likeCount, likeArticle } = useArticleLikes(id, likes)
	const [showTopIcons, showTopIconsSet] = useState(false)
	const { deleteArticle } = useArticle()

	return (
		<div className="articleCard" onMouseEnter={() => showTopIconsSet(true)} onMouseLeave={() => showTopIconsSet(false)}>

			{showTopIcons &&
				<div className="topIcons">
					<img src={edit} onClick={() => window.location.href = `edit/${id}`} />
					<img src={del} onClick={(e) => deleteArticle(id, e)} ignoreOutside="true" />
				</div>
			}

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