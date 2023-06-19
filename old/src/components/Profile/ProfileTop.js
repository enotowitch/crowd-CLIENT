import React, { useState } from "react"
import "./index.scss"
import "./media.scss"
import useUser from "../../hooks/useUser"
import ProfileMenu from "./ProfileMenu"
import LogoUser from "../Navs/LogoUser"

export default function ProfileTop() {

	const { user } = useUser()

	return (
		user &&

		<>
			<LogoUser />
			<ProfileMenu />
		</>
	)
}