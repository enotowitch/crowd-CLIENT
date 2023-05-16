import React from "react"
import "./index.scss"
import "./media.scss"
import TextEditor from "../TextEditor/TextEditor"
import Input from "../FormElements/Input"
import Select from "../FormElements/Select"
import { useParams } from "react-router-dom"
import useArticleFull from "../../hooks/useArticleFull"
import prepareEdit from "../../utils/prepareEdit"

export default function AddArticle() {

	const { articleId } = useParams()
	const { article } = useArticleFull(articleId)

	const { btnText, fn } = prepareEdit("Article")

	return (
		<section className="w100">
			<TextEditor btnText={btnText} fn={fn} editValue={article?.value}>
				<Input name="title" placeholder="title" editValue={article?.title} label="title" />
				<Input name="author" placeholder="author" editValue={article?.author} label="author" />
				<Input name="tags" placeholder="tags separated by comma" editValue={article?.tags} label="tags" />
			</TextEditor>
		</section>
	)
}