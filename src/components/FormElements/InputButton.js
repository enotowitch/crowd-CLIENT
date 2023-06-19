import React, { useState } from "react"
import "./index.scss"
import "./media.scss"
import Input from "./Input"
import Button from "./Button"

export default function InputButton(props) {

	const { target, newText } = props

	const [btnText, btnTextSet] = useState(props.text)
	const [btnClassName, btnClassNameSet] = useState("")

	// * runs props.onClick then next function
	function onClickFew() {
		props.onClick && props.onClick()
		btnTextSet(newText)
		btnClassNameSet("btn_out brand")
	}

	return (
		<div className="inputButton">
			<Input {...props} />
			<Button {...props} onClick={onClickFew} text={btnText} btnClassName={btnClassName} target={target} />
		</div>
	)
}