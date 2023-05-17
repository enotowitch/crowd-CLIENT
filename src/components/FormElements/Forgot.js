import React from "react"
import "./index.scss"
import "./media.scss"
import useAuth from "../../hooks/useAuth"

export default function Forgot() {

	const { forgot } = useAuth()

	return (
		<div className="brand fw700" onClick={forgot}>Forgot Password</div>
	)
}