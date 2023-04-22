import React, { useContext } from "react"
import "./index.scss"
import { Link } from "react-router-dom"
import { Context } from "../../Context"

export default function IconText(props) {

	// TODO: make showMenuSet SOLID; search `showMenuSet`: need to change in: IconText(here), Burger, ProfileTop
	// TODO: useMenu: 1.toggleMenu 2.hideMenu

	// * every IconText must close mobile Menu
	// ! hideMenu
	const { showMenuSet } = useContext(Context)
	function hideMenu() {
		showMenuSet(false)
	}
	// ? hideMenu

	const { path, text, src, className, iconClassName, textClassName } = props // * don't touch => {...props}

	let src_
	try {
		src_ = require(`../../img/${src}.svg`)
	} catch (error) {
		src_ = require(`../../img/${src}.png`)
	}

	return (
		// ! className must be in the end; {...props} must be after all events (onClick, etc...)
		<Link to={path} onClick={hideMenu} {...props} className={`iconText ${className}`}>
			<img className={`iconText__img mr ${iconClassName}`} src={src_} />
			<span className={`iconText__text fw500 ${textClassName}`}>{text}</span>
		</Link>
	)
}