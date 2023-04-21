import React from "react"
import "./index.scss"
import useUser from "../../hooks/useUser"
import IconText from "../IconText/IconText"

export default function ProfileMenu({ showMenu }) {

	const [user, userSet] = useUser() // ! don't touch user

	function logOut() {
		userSet("")
		localStorage.removeItem("token")
		window.location.reload()
	}


	return (
		showMenu &&

		<div className="profileMenu">
			<IconText src="profile" text="My Profile" />
			<IconText src="log out" text="Log Out" onClick={logOut} />
		</div>
	)
}