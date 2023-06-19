import React, { useState, useRef, useEffect } from "react"
import "./index.scss"
import "./media.scss"
import addImage from "../../img/addImage.svg"
import * as api from "../../api"
import { baseURL } from "../../consts"

export default function InputFile(props) { // don't touch {...props}

	const [preview, previewSet] = useState("")
	const [updatedImg, updatedImgSet] = useState(false)

	// ! edit preview
	const { editValue, className } = props
	useEffect(() => {
		editValue && previewSet(`${baseURL}/upload/${editValue}`)
	}, [editValue])
	// ? edit preview

	async function onChangeFew(e) {
		props.onChange && props.onChange(e.target.files[0]) // first props.onChange (if passed) then other fns

		updatedImgSet(true)

		// ! preview
		if (e.target.files[0]) {
			const reader = new FileReader();
			reader.addEventListener("load", () => {
				previewSet(reader.result);
			});
			reader.readAsDataURL(e.target.files[0]);
		}
		// ? preview

		// ! upload
		const formData = new FormData()
		formData.append("image", e.target.files[0])

		const res = await api.addImg(formData)
		// ? upload
	}

	const ref = useRef(null)

	return (
		<>
			<input
				name="img"
				type="file"
				ref={ref}
				{...props}
				onChange={onChangeFew} // must be after "props"
			/>

			<input
				hidden
				name="updatedImg"
				value={updatedImg}
			/>

			<img
				src={preview || addImage}
				onClick={() => ref.current.click()}
				className={`addImage ${className}`}
			/>
		</>
	)
}