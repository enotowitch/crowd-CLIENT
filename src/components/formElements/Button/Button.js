import React from "react"
import { Link } from "react-router-dom"

export default function Button(props) {

	const { text, path, className } = props

	return (
		<Link to={path}>
			<button {...props} className={className}>{text}</button>
		</Link>
	)
}