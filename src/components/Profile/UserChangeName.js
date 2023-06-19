import React, { useContext, useState } from "react"
import "./index.scss"
import "./media.scss"
import * as api from "../../api"
import Input from "../FormElements/Input"
import Button from "../FormElements/Button"
import { Context } from "../../Context"

export default function UserChangeName() {

	const { user } = useContext(Context)

	// ! userChangeName
	const [newName, newNameSet] = useState("")

	async function userChangeNameState(name) {
		newNameSet(name)
	}
	async function userChangeName() {
		const res = await api.userChangeName(newName)
		res.ok && window.location.reload()
	}
	// ? userChangeName

	return (
		<div className="userChangeName">
			<Input name="name" editValue={user?.name} onChange={userChangeNameState} />
			<Button text="change name" onClick={userChangeName} className="mb" />
		</div>
	)
}