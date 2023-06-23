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

	function numberInputOnWheelPreventChange(e) {
		// Prevent the input value change
		e.target.blur()

		// Prevent the page/container scrolling
		e.stopPropagation()

		// Refocus immediately, on the next tick (after the current function is done)
		setTimeout(() => {
			e.target.focus()
		}, 0)
	}

	return (
		<InputLabel label={label}>
			<input
				value={value}
				{...props}
				onChange={onChangeFew} // must be after "props"
				onWheel={numberInputOnWheelPreventChange}
			/>
		</InputLabel>
	)
}