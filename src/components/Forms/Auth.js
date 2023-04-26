import React from "react"
import "./index.scss"
import "./media.scss"
import Input from "../FormElements/Input"
import IconText from "../IconText/IconText"
import useAuth from "../../hooks/useAuth"
import ErrorMsg from "../FormElements/ErrorMsg"
import AuthNew from "./AuthNew"


export default function Auth({ children, type }) { // type=Log In/Sign Up

	const { onSubmit, errorMsg } = useAuth(type)

	return (
		<form className="auth" onSubmit={onSubmit}>
			<IconText src="logo2" text="Copilot Funding" className="fc g black" />

			<Input name="email" label="Email" type="email" placeholder="Enter Email" required />
			<Input name="password" label="Password" type="password" placeholder="Enter Password" required />

			{children}

			<button>{type}</button>

			<ErrorMsg text={errorMsg} />

			<AuthNew type={type} />
		</form>
	)
}