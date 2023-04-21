import React from "react"
import "./index.scss"
import Input from "../FormElements/Input"
import IconText from "../IconText/IconText"
import * as api from "../../api"


export default function Auth({ children, type }) { // type=Log In/Sign Up

	async function onSubmit(e) {
		e.preventDefault()

		let form = {} // {"email": "@","password": "123","user name": "abc"}

		// put all input values to "form"
		e.target.querySelectorAll("input").forEach(each => {
			form = { ...form, [each.name]: each.value }
		})

		const res = await api.auth(type, form)
		console.log(res)
	}

	return (
		<form className="fc" onSubmit={onSubmit}>
			<IconText src="auth logo" text="Crowd Funding Plus" className="fc g black" />

			<Input name="email" type="email" placeholder="Enter Email" />
			<Input name="password" type="password" placeholder="Enter Password" />

			{children}

			<button>{type}</button>
		</form>
	)
}