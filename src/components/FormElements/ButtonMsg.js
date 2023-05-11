import React from "react"
import "./index.scss"
import "./media.scss"

export default function ButtonMsg(props) {

	const { className, msg, text } = props

	return (
		<button className={`${className} ${msg && "btn_out brand"}`}>{msg || text}</button>
	)
}