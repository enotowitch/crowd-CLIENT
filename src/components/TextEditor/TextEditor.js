import React, { useCallback, useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import Select from "../FormElements/Select";
import "./index.scss"
import "./media.scss"
import useArticle from "../../hooks/useArticle"

export default function TextEditor() {

	const [value, valueSet] = useState("")

	const onChange = useCallback((value) => {
		valueSet(value);
	}, [])

	const { addArticle } = useArticle(value)

	return (
		<form className="textEditor" onSubmit={addArticle}>
			<Select name="tag" options={["bricks", "realt"]} />
			<SimpleMDE value={value} onChange={onChange} />
			<button>Add Article</button>
		</form>
	)
}