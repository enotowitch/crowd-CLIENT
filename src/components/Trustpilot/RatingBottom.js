import React from "react"
import "./index.scss"
import "./media.scss"
import Rating from "./Rating"

export default function RatingBottom({ rating, voted }) {
	return (
		<div className="fcc f g">
			<div>Une note de {rating} sur 5 sur la base de {voted} avis sur</div>
			<div className="fcc">
				<Rating rating={1} iconsCount={1} />
				<span className="title2 white">Trustpilot</span>
			</div>
		</div>
	)
}