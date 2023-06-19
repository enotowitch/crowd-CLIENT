import React from "react"
import "./index.scss"
import "./media.scss"
import ShowMore from "./ShowMore"
import ShowMoreFake from "./ShowMoreFake"

export default function ShowMoreButtons({ showMore, path }) {
	return (
		<div className="w100">
			<ShowMore onClick={showMore} className="asc" />
			<ShowMoreFake path={path} className="asc" />
		</div>
	)
}