import React, { useContext } from "react"
import "./index.scss"
import "./media.scss"
import * as api from "../../api"
import UserLogo from "../Other/UserLogo"
import { Context } from "../../Context"

export default function UserChangeImg() {

	const { user } = useContext(Context)

	async function userChangeImg(uploadedImg) {
		const res = await api.userChangeImg(uploadedImg.name)
		res.ok && window.location.reload()
	}

	return (
		<UserLogo img={user?.img} mode="write" className="icon_userBig mb" onChange={userChangeImg} />
	)
}