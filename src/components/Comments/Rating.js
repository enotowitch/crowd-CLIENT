import React from "react"
import "./index.scss"
import "./media.scss"
import arrow from "../../img/arrow.svg"
import useRating from "../../hooks/useRating"


export default function Rating({ commentId, initRating }) {

	const { rating, rate } = useRating(commentId)

	return (
		<div className="if">
			<img src={arrow} onClick={() => rate("-")} className="icon_comment tr180" ignoreOutside="true" />
			<span>{rating || initRating}</span>
			<img src={arrow} onClick={() => rate("+")} className="icon_comment" ignoreOutside="true" />
		</div>
	)
}