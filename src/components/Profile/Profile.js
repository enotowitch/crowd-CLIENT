import React from "react"
import "./index.scss"
import "./media.scss"
import UserChangeName from "./UserChangeName"
import UserChangeImg from "./UserChangeImg"
import Permission from "./Permission"

export default function Profile() {
	return (
		<section className="w100">
			<div className="f">
				<UserChangeImg />
				<UserChangeName />
			</div>
			<Permission />
		</section>
	)
}