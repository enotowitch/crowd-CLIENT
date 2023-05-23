import React from "react"
import "./index.scss"
import "./media.scss"
import { baseURL } from "../../consts"

export default function AuthGoogle() {
	function google() {
		window.open(`${baseURL}/auth/google`, "_self")
	}

	return (
		<div className="" onClick={google}>
			<button>Google</button>
		</div>
	)
}