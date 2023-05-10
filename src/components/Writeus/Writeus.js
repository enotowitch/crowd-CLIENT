import React from "react"
import "./index.scss"
import "./media.scss"
import Input from "../FormElements/Input"
import Textarea from "../FormElements/Textarea"
import useWriteus from "../../hooks/useWriteus"

export default function Writeus() {

	const { writeus } = useWriteus()

	return (
		<section className="w100">
			<form onSubmit={writeus}>
				<div className="title">Write us</div>
				<div>
					Our team is looking forward to responding to your message.
					<br></br>
					You can expect to hear back from us soon.
				</div>

				<Input name="name" placeholder="name" label="Name" />
				<Input type="email" name="email" placeholder="email" label="Email" />
				<Input type="subject" name="subject" placeholder="subject" label="Subject" />
				<Textarea name="message" label="Message" />
				<button className="c w50 m">Send message</button>
			</form>
		</section>
	)
}