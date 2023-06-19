import React from "react"
import IconText from "../Icons/IconText"
import { baseURL } from "../../consts"
import InputFile from "../FormElements/InputFile"

export default function UserLogo(props) {

	const { mode, img } = props // mode read/write

	return (
		!mode || mode === "read" ?

			<IconText
				url={`${baseURL}/upload/${img}`}
				{...props}
			/>

			:

			<InputFile
				editValue={img}
				{...props}
			/>
	)
}