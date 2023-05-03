import React, { useState } from "react"
import "./index.scss"
import "./media.scss"

export default function Checkbox({ name }) {

	const [value, valueSet] = useState(false)

	return (
		<label className="if wsnw mr">
			<input
				type="checkbox"
				name={name}
				value={value}
				onChange={() => valueSet(prev => !prev)}
				className="mr05"
			/>
			<span>{name}</span>
		</label>
	)
}