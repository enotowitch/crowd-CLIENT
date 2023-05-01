import React, { useContext, useEffect } from "react"
import "./index.scss"
import "./media.scss"
import IconText from "./IconText"
import { Context } from "../../Context"

export default function IconTextNav(props) {

	const { src } = props
	const { visitedPage } = useContext(Context)

	// * if src = Context(visitedPage) or localStorage(visitedPage) => then it's `iconNameVisited`
	// * example: articles.svg & articlesVisited.svg
	const visitedSrc = src === visitedPage ? `${visitedPage}Visited` : src
	const onLoadSrc = localStorage.getItem("visitedPage") === src && `${localStorage.getItem("visitedPage")}Visited`

	return (
		<IconText {...props} src={onLoadSrc || visitedSrc} />
	)
}