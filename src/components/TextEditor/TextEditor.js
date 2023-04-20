import React, { useCallback, useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import Button from "../FormElements/Button";
import * as api from "../../api"

export default function TextEditor() {

	const [value, setValue] = useState("")

	const onChange = useCallback((value) => {
		setValue(value);
	}, []);

	async function addArticle() {
		const res = await api.addArticle(value)
		console.log(res)
	}

	return (
		<div className="w100">
			<SimpleMDE value={value} onChange={onChange} />
			<Button text="Add Article" onClick={addArticle} className="c" />
		</div>
	)
}