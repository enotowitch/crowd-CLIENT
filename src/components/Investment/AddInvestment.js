import React from "react"
import "./index.scss"
import "./media.scss"
import TextEditor from "../TextEditor/TextEditor"
import Input from "../FormElements/Input"
import InputDate from "../FormElements/InputDate"
import prepareEdit from "../../utils/prepareEdit"
import Investments from "./Investments"

export default function AddInvestment() {

	const { btnText, fn } = prepareEdit("Investment")

	return (
		<div className="fc g w100">
			<section className="w100">
				<TextEditor btnText={btnText} fn={fn} textEditor={false}>
					<div className="f fwn g">
						<Input name="platform" placeholder="platform" label="Platform" className="w100" />
						<Input name="project" placeholder="project name" label="Project Name" className="w100" />
					</div>
					<div className="f fwn g">
						<Input name="invested" placeholder="amount invested" label="Amount Invested" className="w100" />
						<Input name="income" placeholder="income" label="Income" className="w100" />
					</div>
					<div className="f fwn g">
						<InputDate name="start" label="Start Date" className="w100" />
						<InputDate name="end" label="End Date" className="w100" />
					</div>
				</TextEditor>
			</section>

			<section>
				<Investments title="Investments in progress" closed={false} />
				<Investments title="Investments closed" closed={true} />
			</section>
		</div>
	)
}