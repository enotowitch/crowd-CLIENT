import React from "react"
import "./index.scss"
import "./media.scss"
import IconTextNav from "../Icons/IconTextNav"

export default function NavBottom() {
	return (
		<nav className="navBottom">
			<IconTextNav src="home" path="/" text="Home" />
			<IconTextNav src="articles" path="articles" text="Articles" />
			<IconTextNav src="companies" path="companies" text="Crowdfunding Discovery" />
			<IconTextNav src="bonuses" path="bonuses" text="Bonus" />
			<IconTextNav src="aboutus" path="aboutus" text="About Us" />
		</nav>
	)
}