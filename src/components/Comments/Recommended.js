import React from "react"
import "./index.scss"
import "./media.scss"
import IconText from "../Icons/IconText"

export default function Recommended({ recommend }) { // recommend=yes/no
	return (
		<>
			{recommend === "yes" && <IconText src="yes" iconClassName="icon_mid" />}
			{recommend === "no" && <IconText src="no" iconClassName="icon_mid" />}
		</>
	)
}