import React from "react"
import "./index.scss"
import "./media.scss"
import Input from "../FormElements/Input"
import TextEditor from "../TextEditor/TextEditor"
import prepareEdit from "../../utils/prepareEdit"
import InputFileInput from "../FormElements/InputFileInput"
import useBonusFull from "../../hooks/useBonusFull"
import { useParams } from "react-router-dom"

export default function AddBonus() {

	const { bonusId } = useParams()
	const { bonus } = useBonusFull(bonusId)

	const { btnText, fn } = prepareEdit("Bonus")

	return (
		<section className="w100">
			<TextEditor btnText={btnText} fn={fn} editValue={bonus?.value}>
				<InputFileInput obj={bonus} />
				<Input name="link" placeholder="partner link" editValue={bonus?.link} />
				<Input name="text" placeholder="promo text" editValue={bonus?.text} />
				<Input name="tags" placeholder="tags separated by comma" editValue={bonus?.tags} />
			</TextEditor>
		</section>
	)
}