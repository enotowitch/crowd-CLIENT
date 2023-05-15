import React from "react"
import "./index.scss"
import "./media.scss"
import useBonuses from "../../hooks/useBonuses"
import BonusCard from "./BonusCard"
import ShowMore from "../FormElements/ShowMore"
import ShowMoreFake from "../FormElements/ShowMoreFake"

export default function Bonuses() {

	const { bonuses, showMore } = useBonuses()

	return (
		<section className="cards">
			<div className="title w100">Bonus</div>

			{bonuses?.map(bonus => <BonusCard key={bonus._id} obj={bonus} />)}

			<ShowMore onClick={showMore} className="asc" />
			<ShowMoreFake path="bonuses" className="asc" />
		</section>
	)
}