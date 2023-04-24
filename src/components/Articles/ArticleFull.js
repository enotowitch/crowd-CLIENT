import React from "react"
import "./index.scss"
import "./media.scss"
import Markdown from "marked-react";
import { useParams } from "react-router-dom";
import IconText from "../IconText/IconText";
import useArticleFull from "../../hooks/useArticleFull"
import useTimeAgo from "../../hooks/useTimeAgo";
import useTimeRead from "../../hooks/timeRead";
import Icon2Text from "../IconText/Icon2Text";

export default function ArticleFull() {

	const { id } = useParams()
	const { article } = useArticleFull(id)
	const { timeAgo } = useTimeAgo()
	const { timeRead } = useTimeRead()


	return (
		<div className="articleFull">
			<div className="brand">Blog</div>

			<IconText src={article?.tag} text={article?.tag} iconClassName="icon_small mr05" className="tag" />

			<Icon2Text src="logo author" text="By Crypto.io Global" iconClassName="icon_big">
				<div className="f g">
					{timeAgo(article?.createdAt)}
					<IconText src="dot" text={timeRead(article?.value)} iconClassName="icon_small mr" />
				</div>
			</Icon2Text>

			{<Markdown>{article?.value}</Markdown>}

			<div className="f jcsb">
				<IconText src="views" text={`${article?.views} views`} iconClassName="icon_small mr05" />
				<IconText src="likes" text={`${article?.likes.length} likes`} iconClassName="icon_small mr05" />
			</div>
		</div>
	)
}