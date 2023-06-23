import React, { useState } from "react"
import "./index.scss"
import "./media.scss"

export default function Select(props) {

	const { className, options, editValue, placeholder, def } = props // ! don't touch {...props}

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
			{placeholder && <option hidden>{placeholder}</option>}
			{/* !! `years` Select needs value="" to filter "all years" */}
			{def && <option value="" selected>{def}</option>}
			{options.map(option => <option key={option}>{option}</option>)}
		</select>
	)
}