import React from "react"
import "./index.scss"
import IconText from "../IconText/IconText"
import Button from "../FormElements/Button"

export default function Header() {
	return (
		<header>
			<IconText src="logo" text="Copilot Funding" path="/" />

			<div className="f g">
				<Button text="Log In" btnClassName="btn_out" />
				<Button text="Sign Up" />
			</div>
		</header>
	)
}