import React from "react"
import "./index.scss"
import "./media.scss"
import Input from "../FormElements/Input"
import TextEditor from "../TextEditor/TextEditor"
import prepareEdit from "../../utils/prepareEdit"
import InputFileInput from "../FormElements/InputFileInput"

export default function AddBonus() {

	const { btnText, fn } = prepareEdit("Bonus")

	return (
		<section className="w100">
			<TextEditor btnText={btnText} fn={fn}>
				{/* <InputFileInput obj={bonus} /> */}
				<Input name="link" placeholder="partner link" />
				<Input name="text" placeholder="promo text" />
			</TextEditor>
		</section>
	)
}