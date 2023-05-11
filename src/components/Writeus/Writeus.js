import React from "react"
import "./index.scss"
import "./media.scss"
import Input from "../FormElements/Input"
import Textarea from "../FormElements/Textarea"
import useWriteus from "../../hooks/useWriteus"
import ButtonMsg from "../FormElements/ButtonMsg"

export default function Writeus() {

	const { onSubmit, msg } = useWriteus()

	return (
		<section className="w100">
			<form onSubmit={onSubmit}>
				<div className="title">Write us</div>
				<div>
					Our team is looking forward to responding to your message.
					<br></br>
					You can expect to hear back from us soon.
				</div>

				<Input name="name" placeholder="name" label="Name" required />
				<Input type="email" name="email" placeholder="email" label="Email" required />
				<Input type="subject" name="subject" placeholder="subject" label="Subject" required />
				<Textarea name="message" label="Message" required />
				<ButtonMsg className="c w50 m" msg={msg} text="Send message" />
			</form>
		</section>
	)
}