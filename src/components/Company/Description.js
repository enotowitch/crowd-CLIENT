import React from "react"
import "./index.scss"
import "./media.scss"

export default function Description({ obj }) { // obj=company
	return (
		obj?.description &&
		<section className="description">
			<div className="title">Description</div>
			{/* <pre> */}
			{obj?.description && <div>{obj?.description}</div>}
			{/* </pre> */}
			{obj?.ticketMinimum && <div className="brand">Ticket Minimum: €{obj?.ticketMinimum}</div>}
			{obj?.yearOfCreation && <div className="brand">Year Of Creation: {obj?.yearOfCreation}</div>}
		</section>
	)
}