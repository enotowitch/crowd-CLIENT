import React, { useEffect, useState } from "react"
import "./index.scss"
import "./media.scss"
import InputLabel from "./InputLabel"

export default function Textarea(props) {

	const { label, editValue } = props

	const [value, valueSet] = useState("")

	function onChange(e) {
		valueSet(e.target.value)
	}

	useEffect(() => {
		editValue && valueSet(editValue)
	}, [editValue])

	return (
		<InputLabel label={label}>
			<textarea
				value={value}
				onChange={onChange}
				{...props}
			/>
		</InputLabel>
	)
}