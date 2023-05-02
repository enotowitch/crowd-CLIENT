import React, { useState, useRef } from "react"
import "./index.scss"
import "./media.scss"
import addImage from "../../img/addImage.svg"
import * as api from "../../api"

export default function InputFile(props) {

	const [preview, previewSet] = useState("")

	async function onChange(e) {
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
				onChange={onChange}
				ref={ref}
				{...props}
			/>

			<img
				src={preview || addImage}
				onClick={() => ref.current.click()}
				className="addImage"
			/>
		</>
	)
}