import React from "react"
import "./index.scss"
import "./media.scss"
import { useParams } from "react-router-dom";
import IconText from "../Icons/IconText";
import useArticleFull from "../../hooks/useArticleFull"
import Comments from "../Comments/Comments";
import IconShare from "../Icons/IconShare";
import Tags from "../FormElements/Tags";
import parseTags from "../../utils/parseTags";
import IconLike from "../Icons/IconLike";
import LogoArticle from "./LogoArticle";
import Markdown from "../Other/Markdown";

export default function ArticleFull() {

	const { articleId } = useParams()
	const { article } = useArticleFull(articleId)

	return (
		<div className="fc w100 postFull__wrap">
			<section className="w100 mb">
				<div className="postFull w80 mb c">
					<div className="title2">Blog</div>

					<div className="title">{article?.name}</div>

					<Tags arr={parseTags(article?.tags)} />

					<LogoArticle />

					<Markdown value={article?.value} />

					<div className="f jcsb">
						<IconText src="views" text={`${article?.views} views`} iconClassName="icon_small2 mr05" />
						<div className="f g">
							<IconLike
								id={articleId}
								text={article?.likes.length}
								likes={article?.likes.length}
								likePostType="article"
							/>
							<IconShare
								shareObj={article}
								src="share"
								iconClassName="icon_small2 mr05 icon_share"
								sharePopup="ShareArticle"
								text="share"
							/>
						</div>
					</div>
				</div>
			</section>

			<Comments postType="article" className="w80 c" />

		</div>
	)
}