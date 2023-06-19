import React, { useEffect, useState } from "react"
import "./index.scss"
import "./media.scss"
import { Rating } from "react-simple-star-rating"

export default function Rating_({ rating, iconsCount }) {

	const [_rating, _ratingSet] = useState(0)

	const handleRating = (rate) => {
		_ratingSet(rate)
	}

	useEffect(() => {
		_ratingSet(rating)
	}, [rating])

	return (
		<Rating
			onClick={handleRating}
			initialValue={rating}
			allowFraction={true}
			fillColor="#00B67A"
			iconsCount={iconsCount}
			style={{ pointerEvents: "none" }}
		/>
	)
}