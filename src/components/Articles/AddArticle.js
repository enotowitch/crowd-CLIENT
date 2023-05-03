import React from "react"
import "./index.scss"
import "./media.scss"
import TextEditor from "../TextEditor/TextEditor"
import Input from "../FormElements/Input"
import Select from "../FormElements/Select"
import { useParams } from "react-router-dom"
import useArticleFull from "../../hooks/useArticleFull"

export default function AddArticle() {

	const { articleId } = useParams()
	const { article } = useArticleFull(articleId)

	// todo prepareEdit ?
	const isEdit = window.location.pathname.includes("edit")
	const btnText = isEdit ? "Edit Article" : "Add Article"
	const fn = isEdit ? "editArticle" : "addArticle"

	return (
		<section className="w100">
			<TextEditor btnText={btnText} fn={fn} editValue={article?.value}>
				<Input name="title" placeholder="title" editValue={article?.title} />
				<Input name="author" placeholder="author" editValue={article?.author} />
				<Select name="tag" options={["bricks", "realt"]} editValue={article?.tag} />
			</TextEditor>
		</section>
	)
}