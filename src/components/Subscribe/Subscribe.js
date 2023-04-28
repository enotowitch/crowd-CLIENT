import React from "react"
import "./index.scss"
import "./media.scss"
import Input from "../FormElements/Input"

export default function Subscribe() {
	return (
		<form>
			<div className="title">Subscribe Newsletter</div>
			<div className="mt">
				Subscribe to our newsletter to not miss any
				of our news
			</div>
			<Input name="email" type="email" placeholder="Enter Your Email" required />
			<button className="mt w100">Subscribe</button>
		</form>
	)
}