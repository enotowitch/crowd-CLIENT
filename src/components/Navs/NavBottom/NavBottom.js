import React from "react"
import "./index.scss"
import IconText from "./IconText"

export default function NavBottom() {
	return (

		<nav>
			<IconText src="add-article" to="add-article" text="Add Article" />
			<IconText src="articles" to="articles" text="Articles" />
		</nav>
	)
}