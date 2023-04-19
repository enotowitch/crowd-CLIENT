import React from "react"
import "./index.scss"
import Button from "../../components/formElements/Button/Button"

export default function ArticleCard({ title, img, id }) {
	return (
		<div className="articleCard">
			<img src={img} />
			<div>{title}</div>

			<Button text="Read More" path={`/article/${id}`} className="btn_sec w100" />
		</div>
	)
}