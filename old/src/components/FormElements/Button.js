import React from "react"
import { Link } from "react-router-dom"

// * use simple <button> in forms to trigger onSubmit
// * if Button has "ignoreOutside" attribute => useOutside works well with it
export default function Button(props) {

	const { text, path, btnClassName, className } = props // ! don't touch, props are spreading (onClick, etc..)

	return (
		<Link to={path} className={className}>
			<button {...props} className={btnClassName}>{text}</button>
		</Link>
	)
}