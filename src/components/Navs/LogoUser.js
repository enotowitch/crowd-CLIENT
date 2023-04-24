import React, { useContext } from "react"
import "./index.scss"
import IconText from "../IconText/IconText"
import useUser from "../../hooks/useUser"
import { Context } from "../../Context"

export default function LogoUser() {

	const { user } = useUser()
	const { showProfileMenuSet } = useContext(Context)

	return (
		<IconText
			src="userDummy"
			text={user?.["user name"]}
			onClick={() => showProfileMenuSet(prev => !prev)}
			className="logo_user"
		/>
	)
}