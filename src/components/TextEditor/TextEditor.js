import React, { useCallback, useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import Button from "../formElements/Button/Button";
import * as api from "../../api"

export default function TextEditor() {

	const [value, setValue] = useState("Initial value");

	const onChange = useCallback((value) => {
		setValue(value);
	}, []);

	async function addArticle() {
		const res = await api.addArticle(value)
		console.log(res)
	}

	return (
		<>
			<SimpleMDE value={value} onChange={onChange} />
			<Button text="Add Article" onClick={addArticle} />
		</>
	)
}