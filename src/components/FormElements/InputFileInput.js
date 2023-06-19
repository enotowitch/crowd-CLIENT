import React from "react"
import "./index.scss"
import "./media.scss"
import InputFile from "./InputFile"
import Input from "./Input"

export default function InputFileInput({ obj }) {
	return (
		<div className="if">
			<InputFile editValue={obj?.img} />
			<Input name="name" placeholder="company name" className="w100" editValue={obj?.name} required />
		</div>
	)
}