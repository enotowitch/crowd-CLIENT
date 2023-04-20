import React, { useContext } from "react"
import { Context } from "../../Context"
import ArticleCard from "./ArticleCard";

export default function Articles() {

	const { articles } = useContext(Context)

	const articles_ = articles?.map(article => {

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

	return (
		<div className="articles">
			{articles_}
		</div>
	)
}