import React from "react"
import "./index.scss"
import "./media.scss"
import Markdown from "marked-react";
import { useParams } from "react-router-dom";
import IconText from "../Icons/IconText";
import useArticleFull from "../../hooks/useArticleFull"
import useTimeAgo from "../../hooks/useTimeAgo";
import useTimeRead from "../../hooks/useTimeRead";
import Icon2Text from "../Icons/Icon2Text";
import Comments from "../Comments/Comments";
import IconShare from "../Icons/IconShare";
import Tags from "../FormElements/Tags";
import parseTags from "../../utils/parseTags";

export default function ArticleFull() {

	const { articleId } = useParams()
	const { article } = useArticleFull(articleId)
	const { timeAgo } = useTimeAgo()
	const { timeRead } = useTimeRead()

	return (
		<div className="fc w100">
			<section className="w100 mb">
				<div className="postFull w80 mb c">
					<div className="title2">Blog</div>

					<div className="title">{article?.title}</div>

					<Tags arr={parseTags(article?.tags)} />

					<Icon2Text src="logo author" text={article?.author} iconClassName="icon_big">
						<div className="f g">
							{timeAgo(article?.createdAt)}
							<IconText src="dot" text={timeRead(article?.value)} iconClassName="icon_small mr" />
						</div>
					</Icon2Text>

					{<Markdown>{article?.value}</Markdown>}

					<div className="f jcsb">
						<IconText src="views" text={`${article?.views} views`} iconClassName="icon_small2 mr05" />
						<div className="f g">
							<IconText src="likes" text={`${article?.likes.length} likes`} iconClassName="icon_small2 mr05" />
							<IconShare
								shareObj={article}
								src="share"
								iconClassName="icon_small2 mr05"
								sharePopup="ShareArticle"
								text="share"
							/>
						</div>
					</div>
				</div>
			</section>

			<Comments className="w80 c" />

		</div>
	)
}