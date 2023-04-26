import React, { useContext } from "react"
import "./index.scss"
import "./media.scss"
import { Context } from "../../Context"
import Button from "../FormElements/Button"


export default function AuthNew({ type }) { // type=Log In/Sign Up

	const { popupElementSet } = useContext(Context)

	return (
		<Button
			text={`New ? ${type === "Log In" ? "Sign Up" : "Log In"}`}
			btnClassName="btn_out brand"
			onClick={() => popupElementSet(type === "Log In" ? "Register" : "Login")}
		/>
	)
}