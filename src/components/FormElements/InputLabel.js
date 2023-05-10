import React from "react"
import "./index.scss"
import "./media.scss"

export default function InputLabel(props) {

	const { label, children } = props

	return (
		<label className="w100" {...props}>
			{label && <div className="fw600 mt mb">{label}</div>}
			{children}
		</label>
	)
}