import React, { useContext } from "react"
import "./index.scss"
import "./media.scss"
import { Context } from "../../Context"
import UserLogo from "../Other/UserLogo"

export default function LogoUser() {

	const { user } = useContext(Context)
	const { showProfileMenuSet } = useContext(Context)

	return (
		<UserLogo
			img={user?.img}
			text={user?.name}
			onClick={() => showProfileMenuSet(prev => !prev)}
			className="logo_user ml"
			iconClassName="icon_userMid"
		/>
	)
}