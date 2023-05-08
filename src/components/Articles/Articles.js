import React from "react"
import ArticleCard from "./ArticleCard";
import useArticles from "../../hooks/useArticles";
import parseImg from "../../utils/parseImg";
import ShowMore from "../FormElements/ShowMore";

export default function Articles() {

	const { articles, showMore } = useArticles()

	return (
		<section className="cards">

			{
				articles?.map(article => {

					const img = parseImg(article?.value)

					let cardText = article.value?.replace(/!\[.*\]/g, "") // * ![abc]
					cardText = cardText?.replace(/\[.*\]/g, "") // * [abc]
					cardText = cardText?.replace(/\(http.*\)/g, "") // * (http...)
					cardText = cardText?.replace(/#|>|\*+/g, "") // * replace #>*
					cardText = cardText?.trim()

					return (
						<ArticleCard
							key={article._id}
							id={article._id}
							title={article.title}
							img={img}
							views={article.views}
							likes={article.likes.length}
							tag={article.tag}
							cardText={cardText}
						/>
					)
				})
			}

			<ShowMore onClick={showMore} className="asc" />

		</section>
	)
}