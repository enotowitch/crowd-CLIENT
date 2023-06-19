import React, { useEffect } from "react"
import "./index.scss"
import "./media.scss"
import Checkbox from "./Checkbox"

export default function Remember() {

	useEffect(() => {
		Object.keys(localStorage).map((inputName, ind) => { // ["Remember Me", "email", "password"]
			const form = document.querySelector(".auth") // login form
			form.querySelectorAll("input").forEach(each => {
				if (eval(localStorage.getItem("Remember Me"))) { // if "Remember Me" = true => fill inputs
					if (each.name === inputName) {
						each.value = Object.values(localStorage)[ind]
					}
				}
			})
		})
	}, [])

	function onChange(e) {
		const form = e.target.closest("form")
		form.querySelectorAll("input").forEach(each => {
			// write input name-value to localStorage
			setTimeout(() => {
				localStorage.setItem(each.name, each.value)
				if (each.type === "checkbox") {
					// checkbox: name-checked
					localStorage.setItem(each.name, each.checked)
				}
			}, 1);
		})
	}

	const rememberChecked = eval(localStorage.getItem("Remember Me")) // true/false => render checked/notChecked

	return (
		<Checkbox name="Remember Me" onChange={onChange} rememberChecked={rememberChecked} />
	)
}