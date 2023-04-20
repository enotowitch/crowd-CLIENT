import React from "react"
import "./index.scss"
import Button from "../../components/FormElements/Button"
import IconText from "../IconText/IconText"

export default function ArticleCard({ title, img, id, views }) {
	return (
		<div className="articleCard">
			<img src={img} />
			<div>{title}</div>

			<div>
				<IconText src="views" text={views} iconClassName="icon_small mr05" />
			</div>

			<Button text="Read More" path={`/article/${id}`} btnClassName="btn_sec w100" />
		</div>
	)
}