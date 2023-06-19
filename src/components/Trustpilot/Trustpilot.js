import React from "react"
import "./index.scss"
import "./media.scss"
import Rating from "./Rating"
import RatingWord from "./RatingWord"
import RatingBottom from "./RatingBottom"

export default function Trustpilot({ obj }) { // obj=company

	let name, trustpilotRating, trustpilotVoted
	if (obj) {
		({ name, trustpilotRating, trustpilotVoted } = obj)
	}

	return (
		<>
			{(trustpilotRating && trustpilotVoted) &&
				<div className="trustpilot">
					<div className="title">Avis de la communauté: {name}</div>

					<Rating rating={trustpilotRating} />
					<RatingWord rating={trustpilotRating} />
					<RatingBottom rating={trustpilotRating} voted={trustpilotVoted} />
				</div>
			}
		</>
	)
}