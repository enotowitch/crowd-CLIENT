import React, { useCallback, useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import "./index.scss"
import "./media.scss"
import useArticle from "../../hooks/useArticle"
import useComment from "../../hooks/useComment";
import useCompany from "../../hooks/useCompany";

export default function TextEditor({ children, btnText, fn, editValue }) { // children=Input/Select/etc...

	const [value, valueSet] = useState("")

	const onChange = useCallback((value) => {
		valueSet(value);
	}, [])

	// * functions are gray because of eval(fn)
	const { addArticle, editArticle } = useArticle(value || editValue)
	const { addComment } = useComment(value)
	const { addCompany } = useCompany(value)

	return (
		<form className="textEditor fc" onSubmit={eval(fn)}>

			{children}

			<SimpleMDE value={editValue || value} onChange={onChange} />
			<button className="c wfc" ignoreOutside="true">{btnText}</button>
		</form>
	)
}