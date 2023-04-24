import React from "react"
import "./index.scss"
import IconText from "../IconText/IconText"
import useLogOut from "../../hooks/useLogOut"

export default function ProfileMenu({ showProfileMenu }) {

	const { logOut } = useLogOut()

	return (
		showProfileMenu &&

		<div className="profileMenu">
			<IconText src="profile" text="My Profile" />
			<IconText src="log out" text="Log Out" onClick={logOut} />
		</div>
	)
}