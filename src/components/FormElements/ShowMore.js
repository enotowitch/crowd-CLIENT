import React from "react"
import "./index.scss"
import "./media.scss"
import Button from "./Button"

export default function ShowMore(props) { // don't touch {...props}

	// * don't show real ShowMore at Home => show ShowMoreFake
	const pathname = window.location.pathname
	const className = pathname === "/" && "dn"

	return (
		<Button text="Show More" btnClassName="btn_out showMore" {...props} className={className} />
	)
}