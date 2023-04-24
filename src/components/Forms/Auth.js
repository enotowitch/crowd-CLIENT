import React from "react"
import "./index.scss"
import "./media.scss"
import Input from "../FormElements/Input"
import IconText from "../IconText/IconText"
import useAuth from "../../hooks/useAuth"
import ErrorMsg from "../FormElements/ErrorMsg"


export default function Auth({ children, type }) { // type=Log In/Sign Up

	const { onSubmit, errorMsg } = useAuth(type)

	return (
		<form className="fc" onSubmit={onSubmit}>
			<IconText src="auth logo" text="Crowd Funding Plus" className="fc g black" />

			<Input name="email" type="email" placeholder="Enter Email" required />
			<Input name="password" type="password" placeholder="Enter Password" required />

			{children}

			<button>{type}</button>

			<ErrorMsg text={errorMsg} />
		</form>
	)
}