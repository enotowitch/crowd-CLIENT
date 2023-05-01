import React from "react"
import "./index.scss"
import "./media.scss"
import IconText from "./IconText"

// text1 comes from `props`
// text2 comes from `children`
export default function Icon2Text(props) {

	return (
		<div className="Icon2Text">
			<IconText {...props} textClassName="text1" />
			<div className="text2">{props.children}</div>
		</div>
	)
}