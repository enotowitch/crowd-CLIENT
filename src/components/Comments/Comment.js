import React from "react"
import "./index.scss"
import "./media.scss"
import Icon2Text from "../IconText/Icon2Text"

export default function Comment({ obj }) { //obj=comment

	// user
	const { img, name } = obj.user
	// comment
	const { value } = obj

	return (
		<div className="comment">
			<Icon2Text url={img} text={name} iconClassName="icon_mid">
				{value}
			</Icon2Text>
		</div>
	)
}