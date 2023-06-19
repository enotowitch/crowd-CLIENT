import React from "react"
import "./index.scss"
import "./media.scss"

export default function InvesmentItems({ arr }) {
	return (
		<div className="invesment__items">
			{arr?.map(item => <span className="invesment__item">{item === "9999-01-01" ? "lifetime" : item}</span>)}
		</div>
	)
}