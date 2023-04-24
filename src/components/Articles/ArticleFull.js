import React from "react"
import "./index.scss"
import "./media.scss"
import Markdown from "marked-react";
import { useParams } from "react-router-dom";
import IconText from "../IconText/IconText";
import useArticleFull from "../../hooks/useArticleFull"

export default function ArticleFull() {

	const { id } = useParams()
	const { article } = useArticleFull(id)


	return (
		<div className="articleFull">
			{<Markdown>{article?.value}</Markdown>}

			<div className="f jcsb">
				<IconText src="views" text={`${article?.views} views`} iconClassName="icon_small mr05" />
				<IconText src="likes" text={`${article?.likes.length} likes`} iconClassName="icon_small mr05" />
			</div>
		</div>
	)
}