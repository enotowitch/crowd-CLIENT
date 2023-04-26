import React, { useCallback, useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import "./index.scss"
import "./media.scss"
import useArticle from "../../hooks/useArticle"
import useComment from "../../hooks/useComment";

export default function TextEditor({ children, btnText, fn }) {

	const [value, valueSet] = useState("")

	const onChange = useCallback((value) => {
		valueSet(value);
	}, [])

	// * functions are gray because of eval(fn)
	const { addArticle } = useArticle(value)
	const { addComment } = useComment(value)

	return (
		<form className="textEditor fc" onSubmit={eval(fn)}>

			{children}

			<SimpleMDE value={value} onChange={onChange} />
			<button className="c wfc" ignoreOutside="true">{btnText}</button>
		</form>
	)
}