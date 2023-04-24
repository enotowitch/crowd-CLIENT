import React from "react"
import ArticleCard from "./ArticleCard";
import useArticles from "../../hooks/useArticles";

export default function Articles() {

	const { articles } = useArticles()

	return (
		<div className="articles">

			{
				articles?.map(article => {

					const title = article.value.match(/(?:#+)(.+)/)?.[1] // * match (#) .+ ...\n
					const img = article.value.match(/((https|http).+)(?:\))/)?.[1] // * match http(s) .+ ...)

					return (
						<ArticleCard
							key={article.id}
							id={article._id}
							title={title}
							img={img}
							views={article.views}
							likes={article.likes.length}
						/>
					)
				})
			}

		</div>
	)
}