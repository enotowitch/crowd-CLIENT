import React, { useContext } from "react"
import "./index.scss"
import "./media.scss"
import { Context } from "../../Context";
import img from "../../img/share.svg"

export default function IconShare({ share }) {

	const { popupElementSet, sharingSet } = useContext(Context)
	sharingSet(share)

	return (
		<div className="fcc" onClick={() => popupElementSet("Share")}>
			<img src={img} className="icon_small mr05" ignoreOutside="true" />
			<span ignoreOutside="true">share</span>
		</div>
	)
}