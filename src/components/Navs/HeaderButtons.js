import React, { useContext, useState, useEffect } from "react"
import "./index.scss"
import "./media.scss"
import Button from "../FormElements/Button"
import { Context } from "../../Context"

export default function HeaderButtons() {

	const { popupElementSet } = useContext(Context)
	const { user } = useContext(Context)

	// ! check if user loaded: 
	// * don't show loginBtn at first 2 secs if there is a user
	const [isUserLoading, isUserLoadingSet] = useState(true)
	useEffect(() => {
		user && isUserLoadingSet(false)
		user === undefined && isUserLoadingSet(false)
	}, [user])
	// ? check if user loaded

	return (
		(!user && !isUserLoading) &&
		<div className="f g fcc">
			<Button text="Log In" btnClassName="btn_out login" onClick={() => popupElementSet("Login")} ignoreOutside="true" />
			<Button text="Sign Up" onClick={() => popupElementSet("Register")} ignoreOutside="true" />
		</div>
	)
}