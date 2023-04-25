import React, { useState } from "react"
import "./index.scss"
import "./media.scss"

export default function Select(props) {

	const { className, options } = props // ! don't touch {...props}

	const [value, valueSet] = useState()

	return (
		<select
			value={value}
			onChange={(e) => valueSet(e.target.value)}
			className={className}
			{...props}
		>
			{options.map(option => <option>{option}</option>)}
		</select>
	)
}