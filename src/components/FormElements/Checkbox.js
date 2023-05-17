import React, { useEffect, useState } from "react"
import "./index.scss"
import "./media.scss"

export default function Checkbox(props) {

	const { name, rememberChecked } = props

	const [checked, checkedSet] = useState(false)

	function onChangeFew(e) {
		checkedSet(prev => !prev)
		props.onChange && props.onChange(e)
	}
	// * render checked/notChecked if `rememberChecked` prop passed
	useEffect(() => {
		checkedSet(rememberChecked)
	}, [rememberChecked])

	return (
		<label className="if wsnw mr wfc">
			<input
				type="checkbox"
				name={name}
				checked={checked}
				className="mr05"
				{...props}
				// ! onChange MUST be last
				onChange={onChangeFew}
			/>
			<span>{name}</span>
		</label>
	)
}