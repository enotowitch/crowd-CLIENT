import React, { useContext } from "react"
import "./index.scss"
import NavBottom from "./NavBottom"
import { Context } from "../../Context"
import HeaderButtons from "./HeaderButtons"
import ProfileTop from "../Profile/ProfileTop"

export default function Menu() {

	const { showMenu } = useContext(Context)

	return (
		showMenu &&

		<div className="menu">
			<ProfileTop />
			<HeaderButtons />
			<NavBottom />
		</div>
	)
}