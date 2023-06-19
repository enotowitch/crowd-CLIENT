import React, { useContext } from "react"
import { Context } from "../../Context"

export default function Burger() {

	const { showMenu, showMenuSet, showProfileMenuSet } = useContext(Context)

	function hideMenus() {
		showProfileMenuSet(false)
		showMenuSet(prev => !prev)
	}

	return (
		<div className="burger">

			<input
				id="burger__toggle"
				type="checkbox"
				onClick={hideMenus}
				checked={showMenu}
			/>

			<label className="burger__btn" htmlFor="burger__toggle">
				<span></span>
			</label>

		</div>
	)
}