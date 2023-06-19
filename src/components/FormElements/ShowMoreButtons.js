import React, { useState, useEffect } from "react"
import "./index.scss"
import "./media.scss"
import ShowMore from "./ShowMore"
import ShowMoreFake from "./ShowMoreFake"

export default function ShowMoreButtons({ showMore, path }) {

	const [showFake, showFakeSet] = useState(false)
	const pathname = window.location.pathname

	// show ShowMoreFake at Home & CompanyFull else show real ShowMore
	// ShowMoreFake goes to page e.g /companies, /articles...
	// real ShowMore loads more posts
	useEffect(() => {
		if (pathname === "/" || pathname.includes("company")) {
			showFakeSet(true)
		}
	}, [])

	return (
		<div className="w100">
			{!showFake && <ShowMore onClick={showMore} className="asc" />}
			{showFake && <ShowMoreFake path={path} className="asc" />}
		</div>
	)
}