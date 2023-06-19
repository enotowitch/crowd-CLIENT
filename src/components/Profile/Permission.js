import React, { useContext, useEffect, useState } from "react"
import "./index.scss"
import "./media.scss"
import IconText from "../Icons/IconText"
import Input from "../FormElements/Input"
import { Context } from "../../Context"
import * as api from "../../api"

// * write/edit Permission
export default function Permission() {

	const { user } = useContext(Context)

	// ! addPermission
	async function addPermission() {
		const permissionArr = [] // emails
		document.querySelectorAll(".permission input").forEach(each => {
			each.value !== "" && permissionArr.push(each.value)
		})
		const res = await api.addPermission(permissionArr)
	}
	// ? addPermission

	// ! getPermissions
	useEffect(() => {
		async function getPermissions() {
			const permissions = await api.getPermissions()
			inputCountSet(permissions.length)
			permissionsSet(permissions)
		}

		getPermissions()
	}, [])
	// ? getPermissions

	// ! inputs
	const [inputCount, inputCountSet] = useState(1)
	const [permissions, permissionsSet] = useState([])

	function inputs() {
		return Array.from({ length: inputCount }, (v, i) => i).map((item, ind) => {

			return (
				<>
					<Input
						placeholder="email with write/edit permission"
						editValue={permissions[ind]} // fill inputs
						className="mt"
						onChange={addPermission}
					/>
				</>
			)
		})
	}

	function addInput() {
		inputCountSet(prev => prev + 1)
	}
	// ? inputs

	return (
		user?.isAdmin &&
		<div className="permission">
			<hr></hr>
			<div className="title mt">Write/Edit Permission</div>
			{inputs()}
			<IconText
				src="add"
				onClick={addInput}
				className="mt mb"
			/>
		</div>
	)
}