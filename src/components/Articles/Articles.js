import React, { useContext } from "react"
import { Context } from "../../Context"
import Markdown from "marked-react";

export default function Articles() {

	const { articles } = useContext(Context)
	const articles_ = articles?.map(a => <Markdown>{a.value}</Markdown>)

	return (
		articles_
	)
}