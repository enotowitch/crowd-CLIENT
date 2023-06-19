import React, { useContext, useEffect } from "react"
import "./index.scss"
import "./media.scss"
import IconText from "./IconText"
import { Context } from "../../Context"

export default function IconTextNav(props) {

	const { src } = props
	const { visitedPage, visitedPageSet, showMenuSet, user } = useContext(Context)

	function onClickFew() {
		props.onClick && props.onClick()
		showMenuSet(false) // all icons must hide mobile menu onClick
		// ! coloring icons depending on page visited 
		const noUserNoColor = ["dashboard", "investments"]
		if (noUserNoColor.includes(src) && !user) { return }
		visitedPageSet(src)
		localStorage.setItem("visitedPage", src)
		// ? coloring icons depending on page visited 
	}

	// * if src = Context(visitedPage) or localStorage(visitedPage) => then it's `iconNameVisited`
	// * example: articles.svg & articlesVisited.svg
	const visitedSrc = src === visitedPage ? `${visitedPage}Visited` : src
	const onLoadSrc = localStorage.getItem("visitedPage") === src && `${localStorage.getItem("visitedPage")}Visited`

	return (
		<IconText {...props} src={onLoadSrc || visitedSrc} onClick={onClickFew} />
	)
}