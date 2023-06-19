import React from "react"

export default function Cards({ children }) {
	return (
		<section className="cards__wrap">
			<div className="cards">
				{children}
			</div>
		</section>
	)
}