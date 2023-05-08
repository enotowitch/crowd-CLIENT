import React from "react"
import "./index.scss"
import "./media.scss"
import Button from "./Button"

export default function ShowMore(props) { // don't touch {...props}
	return (
		<Button text="Show More" {...props} btnClassName="btn_out c showMore" />
	)
}