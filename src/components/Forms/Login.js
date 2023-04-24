import React from "react"
import "./index.scss"
import "./media.scss"
import Auth from "./Auth"

export default function Login() {
	return (
		<>
			<Auth type="Log In">
				<div className="f jcsb">
					<div>Remember Me</div>
					<div>Forgot Password</div>
				</div>

			</Auth>
		</>
	)
}