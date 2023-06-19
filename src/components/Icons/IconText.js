import React, { useContext } from "react"
import "./index.scss"
import "./media.scss"
import { Link } from "react-router-dom"
import { Context } from "../../Context"

// * src=local file; url=web file
export default function IconText(props) {

	const { path, text, src, className, iconClassName, textClassName, url } = props // * don't touch => {...props}

	let src_
	if (src) {
		try {
			src_ = require(`../../img/${src}.svg`)
		} catch (error) {
			src_ = require(`../../img/${src}.png`)
		}
	}

	return (
		<Link to={path} {...props} className={`iconText ${className}`}>
			<img className={`iconText__img mr ${iconClassName}`} src={src_ || url} />
			<span className={`iconText__text fw500 ${textClassName}`}>{text}</span>
		</Link>
	)
}