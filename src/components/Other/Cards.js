import React from "react"

export default function Cards({ children, className }) {
	return (
		<section className={`cards__wrap ${className}`}>
			<div className="cards">
				{children}
			</div>
		</section>
	)
}