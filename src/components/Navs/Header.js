import React from "react"
import "./index.scss"
import IconText from "../IconText/IconText"
import ProfileTop from "../Profile/ProfileTop"
import Burger from "./Burger"
import HeaderButtons from "./HeaderButtons"


export default function Header() {

	return (
		<header>
			<IconText src="logo" text="Copilot Funding" path="/" className="logo" />

			<ProfileTop />
			<Burger />

			<HeaderButtons />

		</header>
	)
}