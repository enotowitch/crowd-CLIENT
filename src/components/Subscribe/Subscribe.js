import React from "react"
import "./index.scss"
import "./media.scss"
import Input from "../FormElements/Input"
import useSubscribe from "../../hooks/useSubscribe"
import ButtonMsg from "../FormElements/ButtonMsg"

export default function Subscribe() {

	const { onSubmit, msg } = useSubscribe()

	return (
		<form onSubmit={onSubmit}>
			<div className="title">Subscribe Newsletter</div>
			<div className="mt">
				Subscribe to our newsletter to not miss any
				of our news
			</div>
			<Input name="email" type="email" placeholder="Enter Your Email" required />
			<ButtonMsg className="mt w100" msg={msg} text="Subscribe" />
		</form>
	)
}