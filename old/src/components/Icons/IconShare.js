import React, { useContext } from "react"
import "./index.scss"
import "./media.scss"
import { Context } from "../../Context";

export default function IconShare(props) {

	const { shareObj, src, iconClassName, textClassName, sharePopup, text } = props

	const { popupElementSet, sharingSet } = useContext(Context)
	sharingSet(shareObj)

	let src_
	if (src) {
		try {
			src_ = require(`../../img/${src}.svg`)
		} catch (error) {
			src_ = require(`../../img/${src}.png`)
		}
	}

	return (
		<div className="fcc" onClick={() => popupElementSet(sharePopup)}>
			<img src={src_} ignoreOutside="true" className={iconClassName} />
			<span ignoreOutside="true" className={textClassName}>{text}</span>
		</div>
	)
}