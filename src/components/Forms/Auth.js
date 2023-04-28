import React, { useContext } from "react"
import "./index.scss"
import "./media.scss"
import Input from "../FormElements/Input"
import IconText from "../IconText/IconText"
import useAuth from "../../hooks/useAuth"
import ErrorMsg from "../FormElements/ErrorMsg"
import AuthNew from "./AuthNew"
import { Context } from "../../Context"


export default function Auth({ children, type }) { // type=Log In/Sign Up

	const { onSubmit, errorMsg } = useAuth(type)
	const { popupElementSet } = useContext(Context)

	return (
		<form className="auth" onSubmit={onSubmit}>
			<IconText src="logo2" text="Copilot Funding" className="fc g black" iconClassName="m0" onClick={() => popupElementSet(false)} />

			<Input name="email" label="Email" type="email" placeholder="Enter Email" required />
			<Input name="password" label="Password" type="password" placeholder="Enter Password" required />

			{children}

			<button>{type}</button>

			{errorMsg && <ErrorMsg text={errorMsg} />}

			<AuthNew type={type} />
		</form>
	)
}