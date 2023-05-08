import React from "react"
import "./index.scss"
import "./media.scss"
import IconText from "../Icons/IconText"

export default function ScrollTo({ className }) {
	return (
		<IconText
			src={className}
			onClick={() => document.querySelector(`.${className}`).scrollIntoView({ behavior: "smooth" })}
			iconClassName={`scrollTo ${className}`}
		/>
	)
}