import React, { useState } from "react"
import "./index.scss"
import "./media.scss"

export default function ErrorMsg({ text }) {

	const [show, showSet] = useState(true)

	return (
		show &&
		<>
			<div className="errorMsg">
				{text}
				<span className="ml" onClick={() => showSet(prev => !prev)}>X</span>
			</div>
		</>
	)
}