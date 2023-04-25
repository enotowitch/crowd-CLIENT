import React from "react"
import "./index.scss"
import "./media.scss"
import Auth from "./Auth"
import Input from "../FormElements/Input"

export default function Register() {
	return (
		<>
			<Auth type="Sign Up">
				<Input name="name" placeholder="User Name" required />
			</Auth>
		</>
	)
}