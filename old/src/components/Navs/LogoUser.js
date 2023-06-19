import React, { useContext } from "react"
import "./index.scss"
import "./media.scss"
import IconText from "../Icons/IconText"
import useUser from "../../hooks/useUser"
import { Context } from "../../Context"

export default function LogoUser() {

	const { user } = useUser()
	const { showProfileMenuSet } = useContext(Context)

	return (
		<IconText
			url={user?.img}
			text={user?.name}
			onClick={() => showProfileMenuSet(prev => !prev)}
			className="logo_user ml"
			iconClassName="icon_mid"
		/>
	)
}