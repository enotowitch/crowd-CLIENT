import React from "react"
import "./index.scss"
import "./media.scss"
import Icon2Text from "../Icons/Icon2Text"
import useTimeAgo from "../../hooks/useTimeAgo";
import useTimeRead from "../../hooks/useTimeRead";
import IconText from "../Icons/IconText";
import useArticleFull from "../../hooks/useArticleFull";
import { useParams } from "react-router-dom";

export default function LogoArticle() {

	const { articleId } = useParams()
	const { article } = useArticleFull(articleId)
	const { timeAgo } = useTimeAgo()
	const { timeRead } = useTimeRead()

	return (
		<Icon2Text img={article?.user?.img} text={article?.author} iconClassName="icon_userBig">
			<div className="f g">
				{timeAgo(article?.createdAt)}
				<IconText src="dot" text={timeRead(article?.value)} iconClassName="icon_small mr" />
			</div>
		</Icon2Text>
	)
}