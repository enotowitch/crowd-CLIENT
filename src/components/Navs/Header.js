import React, { useContext } from "react"
import "./index.scss"
import IconText from "../IconText/IconText"
import Button from "../FormElements/Button"
import { Context } from "../../Context"
import useUser from "../../hooks/useUser"
import ProfileTop from "../Profile/ProfileTop"


export default function Header() {

	const { popupElementSet } = useContext(Context)
	const [user] = useUser()


	return (
		<header>
			<IconText src="logo" text="Copilot Funding" path="/" />

			<ProfileTop />

			{!user &&
				<div className="f g">
					<Button text="Log In" btnClassName="btn_out" onClick={() => popupElementSet("Login")} ignoreOutside="true" />
					<Button text="Sign Up" onClick={() => popupElementSet("Register")} ignoreOutside="true" />
				</div>
			}
		</header>
	)
}