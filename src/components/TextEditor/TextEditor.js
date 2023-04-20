import React, { useCallback, useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import Button from "../FormElements/Button";
import * as api from "../../api"

export default function TextEditor() {

	const [value, valueSet] = useState("")

	const onChange = useCallback((value) => {
		valueSet(value);
	}, []);

	async function addArticle() {
		const res = await api.addArticle(value)
		console.log(res)
	}

	return (
		<div className="w100">
			<SimpleMDE value={value} onChange={onChange} />
			<Button text="Add Article" onClick={addArticle} btnClassName="c" />
		</div>
	)
}