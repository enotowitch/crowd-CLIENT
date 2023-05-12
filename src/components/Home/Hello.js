import React, { useContext } from "react"
import "./index.scss"
import "./media.scss"
import Button from "../FormElements/Button"
import { Context } from "../../Context"
import useUser from "../../hooks/useUser"
import useInvested from "../../hooks/useInvested"

export default function Hello() {

	const { popupElementSet } = useContext(Context)
	const { user } = useUser()
	const curMonth = new Date(Date.now()).toLocaleString('en-US', { month: "long" })
	const { revenueCurMonth } = useInvested()

	return (
		<section className="hello">
			{!user &&
				<>
					<div className="hello__title">Connect To Fill Your Crowdfunding <br></br> Dashboard</div>
					<Button text="Connect" btnClassName="hello__btn c" onClick={() => popupElementSet("Login")} ignoreOutside="true" />
				</>
			}
			{user &&
				<>
					<div>Hi <span className="brand">{user.name}</span> <br></br></div>
					<div>Your revenue for the month of {curMonth} is {revenueCurMonth} €. <br></br></div>
					<div>Check your dashboard for more details.</div>
					<Button text="My Dashboard" btnClassName="hello__btnRight" path="/dashboard" />
				</>
			}
		</section>
	)
}