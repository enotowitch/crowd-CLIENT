import React from "react"
import "./index.scss"
import "./media.scss"
import IconTextNav from "../Icons/IconTextNav"

export default function NavBottom() {
	return (

		<nav className="navBottom">
			<IconTextNav src="home" path="/" text="Home" />
			<IconTextNav src="add-article" path="add-article" text="Add Article" />
			<IconTextNav src="articles" path="articles" text="Articles" />
			<IconTextNav src="add-company" path="add-company" text="Add Company" />
			<IconTextNav src="companies" path="companies" text="Crowdfunding Discovery" />
			<IconTextNav src="add-bonus" path="add-bonus" text="Add Bonus" />
			<IconTextNav src="bonuses" path="bonuses" text="Bonus" />
		</nav>
	)
}