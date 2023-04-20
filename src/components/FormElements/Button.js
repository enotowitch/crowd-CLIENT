import React from "react"
import { Link } from "react-router-dom"

export default function Button(props) {

	const { text, path, btnClassName, className } = props

	return (
		<Link to={path} className={className}>
			<button {...props} className={btnClassName}>{text}</button>
		</Link>
	)
}