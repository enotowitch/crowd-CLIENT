import React, { useContext } from "react"
import "./index.scss"
import IconText from "../IconText/IconText"
import Button from "../FormElements/Button"
import { Context } from "../../Context"

export default function Header() {

	const { popupElementSet } = useContext(Context)

	return (
		<header>
			<IconText src="logo" text="Copilot Funding" path="/" />

			<div className="f g">
				<Button text="Log In" btnClassName="btn_out" onClick={() => popupElementSet("Login")} />
				<Button text="Sign Up" onClick={() => popupElementSet("Register")} />
			</div>
		</header>
	)
}