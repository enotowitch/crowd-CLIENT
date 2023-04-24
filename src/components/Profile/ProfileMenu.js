import React, { useContext } from "react"
import "./index.scss"
import "./media.scss"
import IconText from "../IconText/IconText"
import useLogOut from "../../hooks/useLogOut"
import { Context } from "../../Context"

export default function ProfileMenu() {

	const { logOut } = useLogOut()
	const { showProfileMenu } = useContext(Context)

	return (
		showProfileMenu &&

		<div className="profileMenu">
			<IconText src="profile" text="My Profile" />
			<IconText src="log out" text="Log Out" onClick={logOut} />
		</div>
	)
}