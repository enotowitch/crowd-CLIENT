import React from "react"
import "./index.scss"
import "./media.scss"
import BonusCard from "./BonusCard"
import Cards from "../Other/Cards"
import useBonusFull from "../../hooks/useBonusFull"

export default function BonusOne({ id }) {

	const { bonus } = useBonusFull(id)

	return (
		bonus &&
		<Cards className="mb">
			<div className="title w100">Bonus</div>
			<BonusCard key={bonus?._id} obj={bonus} />
			<div className="mb"></div>
		</Cards>
	)
}