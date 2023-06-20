import React, { useEffect, useState } from "react"
import "./index.scss"
import "./media.scss"

export default function IconsTop({ cardRef, children, className }) {

	const [showTopIcons, showTopIconsSet] = useState(false)

	useEffect(() => {
		cardRef?.current?.addEventListener("mouseenter", (e) => {
			showTopIconsSet(true)
			cardRef?.current?.querySelector(".invesment__items")?.classList.add("blur")
		})
		cardRef?.current?.addEventListener("mouseleave", (e) => {
			showTopIconsSet(false)
			cardRef?.current?.querySelector(".invesment__items")?.classList.remove("blur")
		})
	}, [])

	return (
		showTopIcons &&
		<div className={className} onClick={(e) => e.stopPropagation()}>
			{children}
		</div>
	)
}