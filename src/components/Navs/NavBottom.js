import React from "react"
import "./index.scss"
import IconText from "../IconText/IconText"

export default function NavBottom() {
	return (

		<nav>
			<IconText src="add-article" path="add-article" text="Add Article" />
			<IconText src="articles" path="articles" text="Articles" />
		</nav>
	)
}