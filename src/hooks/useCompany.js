import { useContext } from "react"
import * as api from "../api"
import parseForm from "../utils/parseForm"
import useNoUser from "./useNoUser"
import useValidation from "./useValidation"
import { Context } from "../Context"
import animationDelete from "../utils/animationDelete"
import replacePath from "../utils/replacePath"

export default function useCompany(value) { // value=textEditor value

	// ! addCompany
	async function addCompany(e) {
		e.preventDefault()

		const { form } = parseForm(e)
		const img = replacePath(form.img)

		// ! FraisObj
		const formKeysArr = Object.keys(form)

		let FraisObj = {}
		formKeysArr.map((keyName, ind) => {
			if (keyName.includes("FraisLegend")) {
				const keyName = Object.values(form)[ind]
				const keyValue = Object.values(form)[ind + 1]

				if (!Number(keyName) && keyName) { // * don't add numbers and "" to FraisObj
					FraisObj = { ...FraisObj, [keyName]: keyValue } // {"name 1": "value 1","name 2": "value 2"}
				}
			}
		})
		// ? FraisObj

		const res = await api.addCompany({ ...form, FraisObj, img, value })
		res.ok && (window.location.href = `/company/${res.id}`)
	}

	// ! deleteCompany
	async function deleteCompany(id, e) {
		const res = await api.deleteCompany(id)
		animationDelete(res, e)
	}

	// ! editCompany
	const { watchingPost } = useContext(Context) // * id of company I am editing now

	async function editCompany(e) {
		e.preventDefault()

		const { form } = parseForm(e)
		const img = replacePath(form.img)

		// * keep old img if not uploaded new img
		let formAndValue
		if (form.updatedImg === "false") {
			const { img, ...formWithoutImg } = form
			formAndValue = { ...formWithoutImg, value }
		} else {
			formAndValue = { ...form, img, value }
		}

		const res = await api.editCompany(watchingPost, formAndValue)
		res.ok && (window.location.href = `/company/${watchingPost}`)
	}


	return (
		{ addCompany, deleteCompany, editCompany }
	)
}