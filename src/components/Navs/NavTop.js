import React from "react"
import "./index.scss"
import "./media.scss"
import IconTextNav from "../Icons/IconTextNav"

export default function NavTop() {
	return (
		<nav className="navTop">
			<IconTextNav src="dashboard" path="dashboard" text="Dashboard" />
			<IconTextNav src="investments" path="investments" text="Investments" />
		</nav>
	)
}