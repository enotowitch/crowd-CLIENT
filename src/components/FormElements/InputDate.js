import React, { useState } from "react"
import "./index.scss"
import "./media.scss"

export default function InputDate(props) {

	const [value, valueSet] = useState("")

	function onChange(e) {
		valueSet(e.target.value)
	}

	return (
		<input
			type="date"
			value={value}
			onChange={onChange}
			{...props}
		/>
	)
}