import React, { useContext, useRef } from "react"
import "./index.scss"
import "./media.scss"
import { Context } from "../../Context"
import HeaderButtons from "./HeaderButtons"
import ProfileTop from "../Profile/ProfileTop"
import Navs from "./Navs"

export default function Menu() {

	const { showMenu, showProfileMenuSet } = useContext(Context)

	// ! hide ProfileMenu on scroll (mobile)
	const ref = useRef(null)
	ref?.current?.addEventListener("scroll", () => {
		showProfileMenuSet(false)
	})

	return (
		showMenu &&

		<div className="menu">
			<div className="menu__scroll" ref={ref}>
				<ProfileTop />
				<HeaderButtons />
				<Navs />
			</div>
		</div>
	)
}