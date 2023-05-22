import React from "react"
import "./index.scss"
import "./media.scss"
import banner from "../../img/banner.jpg"
import logo from "../../img/logo2.svg"
import title from "../../img/title.svg"

export default function Banner() {
	return (
		<div className="banner">
			<img src={banner} className="banner__img" />
			<div className="banner__logo">
				<img src={logo} />
				<img src={title} />
			</div>
		</div>
	)
}