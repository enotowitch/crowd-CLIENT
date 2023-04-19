import React from "react"
import "./index.scss"
import banner from "../../img/banner.jpg"

export default function Banner() {
	return (
		<div className="banner">
			<img src={banner} />
		</div>
	)
}