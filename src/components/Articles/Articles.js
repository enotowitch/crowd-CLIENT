import React from "react"
import ArticleCard from "./ArticleCard";
import useArticles from "../../hooks/useArticles";
import parseImg from "../../utils/parseImg";
import ShowMoreButtons from "../FormElements/ShowMoreButtons";
import Cards from "../Other/Cards";
import parseTags from "../../utils/parseTags";

export default function Articles() {

	const { articles, showMore } = useArticles()

	return (
		<Cards>
			<div className="title w100">Articles</div>

			{articles?.map(article => {
				const img = parseImg(article?.value)

				let cardText = article.value?.replace(/!\[.*\]/g, "") // * ![abc]
				cardText = cardText?.replace(/\[.*\]/g, "") // * [abc]
				cardText = cardText?.replace(/\(http.*\)/g, "") // * (http...)
				cardText = cardText?.replace(/#|>|\*+/g, "") // * replace #>*
				cardText = cardText?.trim()

				const tags = parseTags(article?.tags)

				return (
					<ArticleCard
						key={article._id}
						id={article._id}
						title={article.title}
						img={img}
						views={article.views}
						likes={article.likes.length}
						tags={tags}
						cardText={cardText}
					/>
				)
			})
			}
			<ShowMoreButtons showMore={showMore} />
		</Cards>
	)
}