import React, { useState } from "react"
import "./index.scss"
import "./media.scss"

export default function Select(props) {

	const { className, options, editValue, placeholder } = props // ! don't touch {...props}

	const [value, valueSet] = useState()

	function onChangeFew(e) {
		valueSet(e.target.value)
		props.onChange && props.onChange(e)
	}

	return (
		<select
			value={value || editValue}
			onChange={onChangeFew}
			className={className}
			{...props}
		>
			<option hidden>{placeholder}</option>
			{options.map(option => <option>{option}</option>)}
		</select>
	)
}