import React, { useRef } from "react"
import "./index.scss"

export default function ErrorMsg({ text }) {

	const ref = useRef()

	ref.current?.classList.remove("dn")
	ref.current?.classList.add("db")

	setTimeout(() => {
		ref.current?.classList.add("dn")
	}, 3000);

	return (
		<div className="tac danger" ref={ref}>{text}</div>
	)
}