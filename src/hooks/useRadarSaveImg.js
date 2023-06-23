import parseForm from "../utils/parseForm"
import { useState } from "react"
import * as api from "../api"

export default function useRadarSaveImg() {

	const [form, formSet] = useState({}) // AddCompany form

	function radarDraw(e) {
		const { form } = parseForm(e.target.closest("form"))
		formSet(form)
	}

	async function radarSave() {
		const radar = document?.querySelector("canvas") // ! assuming there is 1 canvas on the page

		const base64Img = radar?.toDataURL('image/png');
		const res = await api.saveRadarImg(base64Img, form?.name)
	}

	return (
		{ form, radarDraw, radarSave }
	)
}
