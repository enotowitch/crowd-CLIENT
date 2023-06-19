import React from "react"
import "./index.scss"
import "./media.scss"
import Checkbox from "./Checkbox"

export default function Checkboxes({ names }) {
	return (
		<div>
			{
				names.map((name, ind) => (
					<Checkbox key={ind} name={name} />
				))
			}
		</div>
	)
}