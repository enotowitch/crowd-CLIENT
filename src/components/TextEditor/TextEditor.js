import React, { useCallback, useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import "./index.scss"
import "./media.scss"
import useArticle from "../../hooks/useArticle"
import useComment from "../../hooks/useComment";
import useCompany from "../../hooks/useCompany";
import useBonus from "../../hooks/useBonus";
import useInvestment from "../../hooks/useInvestment";

export default function TextEditor(props) { // children=Input/Select/etc...

	const { children, btnText, fn, editValue, textEditor, postType, placeholder } = props

	const [value, valueSet] = useState("")

	const onChange = useCallback((value) => {
		valueSet(value);
	}, [])

	// * functions are gray because of eval(fn)
	const { addArticle, editArticle } = useArticle(value || editValue)
	const { addComment } = useComment(value, postType)
	const { addCompany, editCompany } = useCompany(value || editValue)
	const { addBonus, editBonus } = useBonus(value || editValue)
	const { addInvestment, editInvestment } = useInvestment(value || editValue)

	return (
		<form className="textEditor fc" onSubmit={(e) => (eval(`${fn}(e)`), props?.onSubmit())} onChange={props?.onChange}>

			{children}

			{textEditor || textEditor === undefined &&
				<SimpleMDE
					value={editValue || value}
					onChange={onChange}
				// options={{ placeholder }} // not working, but should
				/>
			}

			<button className="c wfc" ignoreOutside="true">{btnText}</button>
		</form>
	)
}