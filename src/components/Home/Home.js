import React from "react"
import "./index.scss"
import "./media.scss"
import Companies from "../Company/Companies"
import Articles from "../Articles/Articles"
import Bonuses from "../Bonus/Bonuses"
import Hello from "./Hello"

export default function Home() {
	return (
		<div className="fc g w100">
			<Hello />
			<Companies skip={8} />
			<Articles skip={8} />
			<Bonuses skip={8} />
		</div>
	)
}