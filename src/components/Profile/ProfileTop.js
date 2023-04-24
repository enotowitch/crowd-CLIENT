import React, { useState } from "react"
import "./index.scss"
import useUser from "../../hooks/useUser"
import IconText from "../IconText/IconText"
import ProfileMenu from "./ProfileMenu"

export default function ProfileTop() {

	const { user } = useUser()
	const [showProfileMenu, showProfileMenuSet] = useState(false)

	return (
		user &&

		<>
			<IconText src="userDummy" text={user?.["user name"]} onClick={() => showProfileMenuSet(prev => !prev)} />
			<ProfileMenu showProfileMenu={showProfileMenu} />
		</>
	)
}