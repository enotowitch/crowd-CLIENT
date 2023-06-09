import React from "react"
import * as api from "../../api"
import IconText from "../Icons/IconText"

export default function LoginTest() {

	async function author() {
		const res = await api.auth("Log In",
			{
				email: "author@gmail.com",
				password: "author@gmail.com"
			})
		res.token && localStorage.setItem("token", res.token)
		window.location.reload()
	}
	async function user() {
		const random = String(Math.random()).replace(/0./, "")
		const res = await api.auth("Sign Up",
			{
				email: `${random}user@gmail.com`.replace(/0./, ""),
				password: "123456",
				name: `${random} test user`
			})
		res.token && localStorage.setItem("token", res.token)
		window.location.reload()
	}

	function onClick(e) {
		e.target.closest(".loginTest").style.display = "none"
	}

	return (
		<div className="fcc loginTest">
			<button style={{ background: "gray", height: 30, width: "40%" }} onClick={author}>test author</button>
			<button style={{ background: "gray", height: 30, width: "40%" }} onClick={user} className="ml">test user</button>
			<IconText src="delGray" iconClassName="ml05" onClick={onClick} />
		</div>
	)
}