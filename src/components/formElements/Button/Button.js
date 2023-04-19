import React from "react"

export default function Button(props) {

	const { text } = props

	return (
		<button {...props}>{text}</button>
	)
}