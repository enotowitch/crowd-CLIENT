import React from "react"
import "./index.scss"
import "./media.scss"
import Companies from "../Company/Companies"
import Articles from "../Articles/Articles"

export default function Home() {
	return (
		<div className="fc g">
			<Companies />
			<Articles />
		</div>
	)
}