import React from "react"
import "./index.scss"
import "./media.scss"
import { baseURL } from "../../consts"

export default function AuthGoogle({ type }) { // type=Log In/Sign Up
	function google() {
		window.open(`${baseURL}/auth/google`, "_self")
	}

	return (
		<div className="" onClick={google}>
			<button>{type} with Google</button>
		</div>
	)
}