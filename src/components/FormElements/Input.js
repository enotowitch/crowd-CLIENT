import React, { useState } from "react"
import "./index.scss"
import "./media.scss"

export default function Input(props) {

	const { label } = props // ! don't touch {...props}

	const [value, valueSet] = useState("")

	function onChange(e) {
		valueSet(e.target.value)
	}

	return (
		<label>
			<div className="fw600 mt mb">{label}</div>

			<input
				value={value}
				onChange={onChange}
				{...props}
			/>
		</label>
	)
}