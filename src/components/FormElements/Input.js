import React, { useEffect, useState } from "react"
import "./index.scss"
import "./media.scss"
import InputLabel from "./InputLabel"

export default function Input(props) {

	const { label, editValue } = props // ! don't touch {...props}

	const [value, valueSet] = useState("")

	function onChangeFew(e) {
		valueSet(e.target.value)
		props.onChange && props.onChange(e.target.value) // exec. props.onChange (if passed)
	}

	useEffect(() => {
		editValue && valueSet(editValue)
	}, [editValue])

	return (
		<InputLabel label={label}>
			<input
				value={value}
				{...props}
				onChange={onChangeFew} // must be after "props"
			/>
		</InputLabel>
	)
}