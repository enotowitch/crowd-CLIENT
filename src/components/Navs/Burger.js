import React, { useContext } from "react"
import { Context } from "../../Context"

export default function Burger() {

	const { showMenuSet } = useContext(Context)

	return (
		<div className="burger">
			<input id="burger__toggle" type="checkbox" onClick={() => showMenuSet(prev => !prev)} />
			<label className="burger__btn" htmlFor="burger__toggle">
				<span></span>
			</label>
		</div>
	)
}