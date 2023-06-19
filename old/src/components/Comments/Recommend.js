import React from "react"
import "./index.scss"
import "./media.scss"
import yes from "../../img/yes.svg"
import no from "../../img/no.svg"

export default function Recommend({ recommend }) { // recommend=yes/no
	return (
		<>
			{recommend === "yes" && <img className="icon_mid" src={yes} />}
			{recommend === "no" && <img className="icon_mid" src={no} />}
		</>
	)
}