import React from "react"
import "./index.scss"
import "./media.scss"
import UserLogo from "../Other/UserLogo"

// text1 comes from `props`
// text2 comes from `children`
export default function Icon2Text(props) {

	return (
		<div className="Icon2Text">
			<UserLogo {...props} textClassName="text1" />
			<div className="text2">{props.children}</div>
		</div>
	)
}