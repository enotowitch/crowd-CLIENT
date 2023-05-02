import React, { useEffect, useState } from "react"
import "./index.scss"
import "./media.scss"

export default function IconsTop({ cardRef, children, className }) {

	const [showTopIcons, showTopIconsSet] = useState(false)

	useEffect(() => {
		cardRef?.current?.addEventListener("mouseenter", (e) => {
			showTopIconsSet(true)
		})
		cardRef?.current?.addEventListener("mouseleave", (e) => {
			showTopIconsSet(false)
		})
	}, [])

	return (
		showTopIcons &&
		<div className={className}>
			{children}
		</div>
	)
}