import React from "react"
import ArticleCard from "./ArticleCard";
import useArticles from "../../hooks/useArticles";

export default function Articles() {

	const { articles } = useArticles()

	return (
		<div className="articles">

			{
				articles?.map(article => {

					const img = article.value.match(/((https|http).+)(?:\))/)?.[1] // * match http(s) .+ ...)

					return (
						<ArticleCard
							key={article._id}
							id={article._id}
							title={article.title}
							img={img}
							views={article.views}
							likes={article.likes.length}
							tag={article.tag}
						/>
					)
				})
			}

		</div>
	)
}