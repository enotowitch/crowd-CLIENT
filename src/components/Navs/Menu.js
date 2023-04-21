import React, { useContext } from "react"
import "./index.scss"
import NavBottom from "./NavBottom"
import { Context } from "../../Context"
import HeaderButtons from "./HeaderButtons"

export default function Menu() {

	const { showMenu } = useContext(Context)

	return (
		showMenu &&

		<div className="menu">
			<HeaderButtons />
			<NavBottom />
		</div>
	)
}