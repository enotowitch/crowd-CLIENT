import React from "react"

export default function Card({ cardRef, type, id, children }) { // type=article/company/bonus; id=articleId/...

	function onClick() {
		window.location.href = `/${type}/${id}` // go to /article/articleId
	}

	return (
		<div
			className="card"
			ref={cardRef}
			onClick={onClick}
		>
			{children}
		</div>
	)
}