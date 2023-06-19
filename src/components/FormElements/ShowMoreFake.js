import React from "react"
import "./index.scss"
import "./media.scss"
import Button from "./Button"

export default function ShowMoreFake({ path }) {

	return (
		<Button
			text="Show More"
			btnClassName="btn_out showMore"
			onClick={() => window.location.href = "/" + path}
		/>
	)
}