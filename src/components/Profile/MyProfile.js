import React, { useContext } from "react"
import "./index.scss"
import "./media.scss"
import { Context } from "../../Context"
import IconTextNav from "../Icons/IconTextNav"

export default function MyProfile() {

	const { showProfileMenuSet, showMenuSet } = useContext(Context)

	function hideMenus() {
		showProfileMenuSet(false)
		showMenuSet(false)
	}

	return (
		<IconTextNav src="profile" text="My Profile" path="profile" onClick={hideMenus} />
	)
}