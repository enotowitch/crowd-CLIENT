import React, { useEffect } from "react"
import "./index.scss"
import "./media.scss"
import IconText from "../Icons/IconText"

export default function ScrollTo({ className }) {

	// ! hide `.toheader` scroll if on page top
	window.onscroll = function () { scrollCheck() }

	function scrollCheck() {
		if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
			document.querySelector(".toheader").style.display = "block"
		} else {
			document.querySelector(".toheader").style.display = "none"
		}
	}

	useEffect(() => {
		scrollCheck()
	}, [])
	// ? hide `.toheader` scroll if on page top

	return (
		<IconText
			src={className}
			onClick={() => document.querySelector(`.${className}`).scrollIntoView({ behavior: "smooth" })}
			iconClassName={`scrollTo to${className}`} // * .toheader for css position
		/>
	)
}