import React from "react"
import "./index.scss"
import "./media.scss"
import Auth from "./Auth"
import Remember from "../FormElements/Remember"
import Forgot from "../FormElements/Forgot"

export default function Login() {
	return (
		<>
			<Auth type="Log In">
				<div className="f jcsb">
					<Remember />
					<Forgot />
				</div>
			</Auth>
		</>
	)
}