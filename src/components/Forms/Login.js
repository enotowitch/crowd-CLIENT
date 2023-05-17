import React from "react"
import "./index.scss"
import "./media.scss"
import Auth from "./Auth"
import Remember from "../FormElements/Remember"

export default function Login() {
	return (
		<>
			<Auth type="Log In">
				<div className="f jcsb">
					<Remember />
					<div className="brand fw700">Forgot Password</div>
				</div>
			</Auth>
		</>
	)
}