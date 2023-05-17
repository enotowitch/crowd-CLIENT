import React, { useContext } from "react"
import "./index.scss"
import "./media.scss"
import Button from "../FormElements/Button"
import { Context } from "../../Context"
import useUser from "../../hooks/useUser"

export default function HeaderButtons() {

	const { popupElementSet } = useContext(Context)
	const { user } = useUser()

	return (
		!user &&
		<div className="f g fcc">
			<Button text="Log In" btnClassName="btn_out login" onClick={() => popupElementSet("Login")} ignoreOutside="true" />
			<Button text="Sign Up" onClick={() => popupElementSet("Register")} ignoreOutside="true" />
		</div>
	)
}