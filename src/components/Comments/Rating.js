import React from "react"
import "./index.scss"
import "./media.scss"
import arrow from "../../img/arrow.svg"
import useRating from "../../hooks/useRating"


export default function Rating({ commentId, initRating }) {

	const { rating, rate } = useRating(commentId)
	const rating_ = rating || initRating
	const ratingColor = rating_ > 0 ? "brand" : "danger"

	return (
		<div className="if">
			<img src={arrow} onClick={() => rate("-")} className="icon_comment tr180" ignoreOutside="true" />
			<span className={ratingColor}>{rating_}</span>
			<img src={arrow} onClick={() => rate("+")} className="icon_comment" ignoreOutside="true" />
		</div>
	)
}