import React, { useEffect, useState } from "react"
import "./index.scss"
import "./media.scss"
import Input from "../FormElements/Input"
import add from "../../img/add.svg"

export default function Frais({ obj }) { // obj=company

	const [count, countSet] = useState(1)

	// ! edit Frais Legends
	let editFraisInputsLength
	if (obj) {
		// * obj?.FraisObj = {name 1: '1', name 2: '2'}
		editFraisInputsLength = Object.keys(obj?.FraisObj).length // * ["name1", "name2"].length
	}

	useEffect(() => {
		countSet(editFraisInputsLength)
	}, [obj])
	// ? edit Frais Legends

	function inputs() {
		return Array.from({ length: count }, (v, i) => i).map((item, ind) => {

			// ! edit Frais Legends
			let editFraisInputName, editFraisInputValue
			if (obj) {
				editFraisInputName = Object.keys(obj?.FraisObj)
				editFraisInputValue = Object.values(obj?.FraisObj)
			}
			// ? edit Frais Legends

			return (
				<>
					<Input name={`FraisLegend${ind + 1}name`} placeholder={`name of legend ${ind + 1}`} editValue={editFraisInputName?.[ind]} />
					<Input name={`FraisLegend${ind + 1}value`} placeholder={`value of legend ${ind + 1}`} editValue={editFraisInputValue?.[ind]} />
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