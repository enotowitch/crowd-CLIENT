import React from "react"
import "./index.scss"
import "./media.scss"
import usePosts from "../../hooks/usePosts"
import BonusCard from "./BonusCard"
import ShowMoreButtons from "../FormElements/ShowMoreButtons"
import Cards from "../Other/Cards"

export default function Bonuses({ skip }) {

	const [bonuses, showMore] = usePosts(skip, "bonus")

	return (
		<Cards>
			<div className="title w100">Bonus</div>
			{bonuses?.map(bonus => <BonusCard key={bonus._id} obj={bonus} />)}
			<ShowMoreButtons showMore={showMore} path="bonuses" />
		</Cards>
	)
}