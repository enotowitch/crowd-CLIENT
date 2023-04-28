import React from "react"
import ArticleCard from "./ArticleCard";
import useArticles from "../../hooks/useArticles";

export default function Articles() {

	const { articles } = useArticles()

	return (
		<section className="articles">

			{
				articles?.map(article => {

					{/* TODO: can grab link, not img */ }
					const img = article.value?.match(/((https|http).+)(?:\))/)?.[1] // * match http(s) .+ ...)

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

		</section>
	)
}