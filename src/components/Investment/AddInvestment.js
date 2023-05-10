import React from "react"
import "./index.scss"
import "./media.scss"
import TextEditor from "../TextEditor/TextEditor"
import Input from "../FormElements/Input"
import InputDate from "../FormElements/InputDate"

export default function AddInvestment() {
	return (
		<section className="w100">
			<TextEditor textEditor={false}>
				<div className="f fwn g">
					<Input name="platform" placeholder="platform" label="Platform" className="w100" />
					<Input name="project name" placeholder="project name" label="Project Name" className="w100" />
				</div>
				<div className="f fwn g">
					<Input name="invested" placeholder="amount invested" label="Amount Invested" className="w100" />
					<Input name="yield" placeholder="yield" label="Yield" className="w100" />
				</div>
				<div className="f fwn g">
					<InputDate name="start" label="Start Date" className="w100" />
					<InputDate name="end" label="End Date" className="w100" />
				</div>
			</TextEditor>
		</section>
	)
}