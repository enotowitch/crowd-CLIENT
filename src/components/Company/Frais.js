import React, { useState } from "react"
import "./index.scss"
import "./media.scss"
import Input from "../FormElements/Input"
import add from "../../img/add.svg"

export default function Frais({ obj }) { // obj=company

	const [count, countSet] = useState(1)

	function inputs() {
		return Array.from({ length: count }, (v, i) => i).map((item, ind) => {
			return (
				<>
					<Input name={`FraisLegend${ind + 1}name`} placeholder={`name of legend ${ind + 1}`} />
					<Input name={`FraisLegend${ind + 1}value`} placeholder={`value of legend ${ind + 1}`} />
				</>
			)
		})
	}

	function addInput() {
		countSet(prev => prev + 1)
	}

	return (
		<>
			<Input name="Frais" type="number" placeholder="Frais" editValue={obj?.Frais} label="Frais" />
			<div className="f fcc jcfs g">
				{inputs()}
				<img src={add} className="icon_small" onClick={addInput} />
			</div>
		</>
	)
}