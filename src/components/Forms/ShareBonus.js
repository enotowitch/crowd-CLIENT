import React, { useContext } from "react"
import "./index.scss"
import "./media.scss"
import { Context } from "../../Context"
import Share from "./Share"
import { baseURL } from "../../consts"

export default function ShareBonus() {

	const { sharing } = useContext(Context)
	const { name, tag, img } = sharing

	return (
		<Share topTitle={tag} bottomTitle={"Get your bonus for: " + name} hashtag={tag}>
			<img src={`${baseURL}/upload/${img}`} />
		</Share>
	)
}