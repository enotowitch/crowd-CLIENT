import React, { useContext } from "react"
import "./index.scss"
import "./media.scss"
import { Context } from "../../Context"
import Radar from "../Charts/Radar"
import Share from "./Share"

export default function ShareCompany() {

	const { sharing } = useContext(Context)
	const { name } = sharing

	return (
		<Share topTitle={name} bottomTitle={"Share: " + name} hashtag={name}>
			<Radar obj={sharing} />
		</Share>
	)
}