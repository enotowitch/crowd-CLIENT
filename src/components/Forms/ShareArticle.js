import React, { useContext } from "react"
import "./index.scss"
import "./media.scss"
import { Context } from "../../Context"
import parseImg from "../../utils/parseImg"
import Share from "./Share"

export default function ShareArticle() {

	const { sharing } = useContext(Context)
	const { name, tag, value } = sharing
	const img = parseImg(value)

	return (
		<Share topTitle={tag} bottomTitle={"Share: " + name} hashtag={tag}>
			<img src={img} />
		</Share>
	)
}