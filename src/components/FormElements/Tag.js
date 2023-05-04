import React from "react"
import "./index.scss"
import "./media.scss"
import IconText from "../Icons/IconText"

export default function Tag(props) { // don't touch {...props}
	return (
		<IconText iconClassName="icon_small mr05" className="tag" {...props} />
	)
}