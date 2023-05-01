import React from "react"
import "./index.scss"
import "./media.scss"
import IconTextNav from "../Icons/IconTextNav"

export default function NavBottom() {
	return (

		<nav className="navBottom">
			<IconTextNav src="add-article" path="add-article" text="Add Article" />
			<IconTextNav src="articles" path="articles" text="Articles" />
		</nav>
	)
}