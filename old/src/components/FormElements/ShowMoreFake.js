import React from "react"
import "./index.scss"
import "./media.scss"
import Button from "./Button"

export default function ShowMoreFake({ path }) {

	// * show ShowMoreFake only at Home => else show real ShowMore
	const pathname = window.location.pathname
	const className = pathname !== "/" && "dn"

	return (
		<Button 
		text="Show More" 
		btnClassName="btn_out showMore" 
		onClick={() => window.location.href = path} 
		className={className} />
	)
}