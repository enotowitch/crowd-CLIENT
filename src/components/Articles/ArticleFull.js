import React, { useEffect, useState } from "react"
import "./index.scss"
import Markdown from "marked-react";
import { useParams } from "react-router-dom";
import * as api from "../../api"
import IconText from "../IconText/IconText";

export default function ArticleFull() {

	const { id } = useParams()
	const [article, articleSet] = useState()

	useEffect(() => {
		async function getArticle() {
			const res = await api.getArticle(id)
			articleSet(res)
		}

		getArticle()
	}, [id])


	return (
		<div className="articleFull">
			{<Markdown>{article?.value}</Markdown>}
			<IconText src="views" text={`${article?.views} views`} iconClassName="icon_small mr05" />
		</div>
	)
}