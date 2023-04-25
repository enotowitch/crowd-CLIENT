import React from "react"
import "./index.scss"
import "./media.scss"
import TextEditor from "../TextEditor/TextEditor"
import Input from "../FormElements/Input"
import Select from "../FormElements/Select"

export default function AddArticle() {
	return (
		<TextEditor btnText="Add Article" fn="addArticle">
			<Input name="title" placeholder="title" />
			<Select name="tag" options={["bricks", "realt"]} />
		</TextEditor>
	)
}