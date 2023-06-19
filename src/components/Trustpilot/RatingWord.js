import React from "react"
import "./index.scss"
import "./media.scss"

export default function RatingWord({ rating }) {

	let ratingWord
	rating <= 5 && (ratingWord = "Exceptionnel")
	rating <= 4 && (ratingWord = "Très bien")
	rating <= 3 && (ratingWord = "Moyen")
	rating <= 2 && (ratingWord = "Décevant")
	rating <= 1 && (ratingWord = "Mauvais")

	return (
		<div className="title2 white">
			{ratingWord}
		</div>
	)
}