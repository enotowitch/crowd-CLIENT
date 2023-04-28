import React from "react"
import "./index.scss"
import "./media.scss"
import IconText from "../IconText/IconText"

export default function Logo() {
	return (
		<IconText src="logo" text="Copilot Funding" path="/" className="logo" />
	)
}