import React, { useContext } from "react"
import "./index.scss"
import "./media.scss"
import IconText from "../Icons/IconText"
import { Context } from "../../Context"

export default function Alert() {

	const { modalText } = useContext(Context)

	return (
		<div className="alert">
			<IconText src="alert" text={modalText} iconClassName="icon_big" textClassName="black" />
		</div>
	)
}