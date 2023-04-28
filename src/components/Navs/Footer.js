import React from "react"
import "./index.scss"
import "./media.scss"
import Logo from "./Logo"
import Button from "../FormElements/Button"
import Subscribe from "../Subscribe/Subscribe"

export default function Footer() {
	return (
		<footer className="f jcsb p2 g3">

			<div>
				<Logo />
				<div className="mt">
					La Première Brique is the new 100% digital platform
					dedicated to real estate investment from €1.
				</div>
				<Button text="Write Us" btnClassName="darkBg mt" />
			</div>

			<Subscribe />

			<div>
				<div className="title">Disclaimers</div>
				<div className="mt">
					As you will have understood, if we offer such attractive
					returns, it is also because our investments are not
					guaranteed. Our real estate crowdfunding offers involve
					certain risks and in particular the risk of total or partial loss
					of the sums invested and the risk of delay. In addition, past
					performance is not indicative of future performance, which
					means that just because our loss rate is 0% does not
					mean that we will never have an incident on a file. If you
					have any questions about the risks associated with our
					projects, contact us and our teams will take the time to
					answer your questions.
				</div>
			</div>
		</footer>
	)
}