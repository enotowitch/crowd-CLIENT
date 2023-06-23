import React, { useContext, useEffect, useState } from "react"
import "./index.scss"
import "./media.scss"
import { Context } from "../../Context"

export default function ErrorMsg() {

	const [show, showSet] = useState(true)
	const { errorMsg, errorMsgCount } = useContext(Context)

	useEffect(() => {
		showSet(true)
	}, [errorMsgCount])

	return (
		(show && errorMsg) &&
		<>
			<div className="errorMsg">
				{errorMsg}
				<span className="ml" onClick={() => showSet(prev => !prev)}>X</span>
			</div>
		</>
	)
}