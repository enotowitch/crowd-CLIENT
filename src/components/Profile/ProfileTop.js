import React, { useContext } from "react"
import "./index.scss"
import "./media.scss"
import ProfileMenu from "./ProfileMenu"
import LogoUser from "../Navs/LogoUser"
import { Context } from "../../Context"

export default function ProfileTop() {

	const { user } = useContext(Context)

	return (
		user &&
		<>
			<LogoUser />
			<ProfileMenu />
		</>
	)
}