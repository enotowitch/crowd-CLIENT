import React from "react"
import "./index.scss"
import "./media.scss"
import IconText from "../Icons/IconText"
import useLogOut from "../../hooks/useLogOut"

export default function LogOut() {

	const { logOut } = useLogOut()

	return (
		<IconText src="log out" text="Log Out" onClick={logOut} />
	)
}