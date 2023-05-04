import React, { useState } from "react"
import "./index.scss"
import "./media.scss"
import Select from "./Select"
import Input from "./Input"
import Tags from "./Tags"

export default function SelectMany({ options, name }) {

	const [arr, arrSet] = useState([]) // * arr of tags

	function onChange(e) {
		// * add tag
		arrSet(prev => [...prev, e.target.value])
	}

	function onClick(e) {
		// !! closest(".tag")
		const tagText = e.target.closest(".tag").innerText

		// * remove tag
		arrSet(prev => {
			arr.splice(arr.indexOf(tagText), 1)
			return arr
		})
	}

	return (
		<>
			<Select options={options} onChange={onChange} />
			<Input hidden name={name} value={arr} />

			<Tags
				arr={arr}
				onClick={onClick}
				src="del"
				textClassName="order1 mr"
				iconClassName="order2 icon_small m0"
			/>
		</>
	)
}