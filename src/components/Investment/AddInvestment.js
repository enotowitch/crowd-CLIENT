import React from "react"
import "./index.scss"
import "./media.scss"
import TextEditor from "../TextEditor/TextEditor"
import Input from "../FormElements/Input"
import prepareEdit from "../../utils/prepareEdit"
import Investments from "./Investments"
import { useParams } from "react-router-dom"
import useInvestmentFull from "../../hooks/useInvestmentFull"

export default function AddInvestment() {

	const { investmentId } = useParams()
	const { investment } = useInvestmentFull(investmentId)

	const { btnText, fn } = prepareEdit("Investment")

	return (
		<div className="fc g w100">
			<section className="w100">
				<TextEditor btnText={btnText} fn={fn} textEditor={false}>
					<div className="f fwn g">
						<Input name="platform" placeholder="platform" label="Platform" className="w100" editValue={investment?.platform} />
						<Input name="project" placeholder="project name" label="Project Name" className="w100" editValue={investment?.project} />
					</div>
					<div className="f fwn g">
						<Input name="invested" placeholder="amount invested" label="Amount Invested" className="w100" editValue={investment?.invested} />
						<Input name="income" placeholder="income" label="Income" className="w100" editValue={investment?.income} />
					</div>
					<div className="f fwn g">
						<Input type="date" name="start" label="Start Date" className="w100" editValue={investment?.start} />
						<Input type="date" name="end" label="End Date" className="w100" editValue={investment?.end} />
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