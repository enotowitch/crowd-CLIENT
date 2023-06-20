import React from "react"
import "./index.scss"
import "./media.scss"
import TextEditor from "../TextEditor/TextEditor"
import Input from "../FormElements/Input"
import { useParams } from "react-router-dom"
import useArticleFull from "../../hooks/useArticleFull"
import prepareEdit from "../../utils/prepareEdit"

export default function AddArticle() {

	const { articleId } = useParams()
	const { article } = useArticleFull(articleId)

	const { btnText, fn } = prepareEdit("Article")

	return (
		<section className="w100">
			<div className="title mb">{btnText}</div>
			<TextEditor btnText={btnText} fn={fn} editValue={article?.value}>
				<Input name="name" placeholder="title" editValue={article?.name} label="title" required />
				<Input name="author" placeholder="author" editValue={article?.author} label="author" required />
				<Input name="tags" placeholder="tags separated by comma" editValue={article?.tags} label="tags" required />
			</TextEditor>
		</section>
	)
}