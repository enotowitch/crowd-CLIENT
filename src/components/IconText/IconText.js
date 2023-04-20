import React from "react"
import "./index.scss"
import { Link } from "react-router-dom"

export default function IconText(props) {

	const { path, text, src, className, iconClassName, textClassName } = props // * don't touch => {...props}

	let src_
	try {
		src_ = require(`../../img/${src}.svg`)
	} catch (error) {
		src_ = require(`../../img/${src}.png`)
	}

	return (
		<Link {...props} to={path} className={`iconText ${className}`}>
			<img className={`mr ${iconClassName}`} src={src_} />
			<span className={`fw500 ${textClassName}`}>{text}</span>
		</Link>
	)
}