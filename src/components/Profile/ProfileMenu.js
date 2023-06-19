import React, { useContext } from "react"
import "./index.scss"
import "./media.scss"
import { Context } from "../../Context"
import MyProfile from "./MyProfile"
import LogOut from "./LogOut"

export default function ProfileMenu() {

	const { showProfileMenu } = useContext(Context)

	return (
		showProfileMenu &&
		<section className="profileMenu">
			<MyProfile />
			<LogOut />
		</section>
	)
}