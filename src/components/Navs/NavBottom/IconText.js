import React from "react"
import "./index.scss"
import { Link } from "react-router-dom"

export default function IconText({ to, text, src }) {
	// todo to = path

	let src_
	try {
		src_ = require(`../../../img/${src}.svg`)
	} catch (error) {
		src_ = require(`../../../img/${src}.png`)
	}

	return (
		<Link to={to} className="iconText">
			<img className="mr" src={src_} />
			<span className="fw500">{text}</span>
		</Link>
	)
}