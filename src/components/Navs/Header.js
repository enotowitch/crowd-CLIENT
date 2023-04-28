import React from "react"
import "./index.scss"
import "./media.scss"
import ProfileTop from "../Profile/ProfileTop"
import Burger from "./Burger"
import HeaderButtons from "./HeaderButtons"
import Logo from "./Logo"


export default function Header() {

	return (
		<header>
			<Logo />

			<ProfileTop />
			<Burger />

			<HeaderButtons />

		</header>
	)
}