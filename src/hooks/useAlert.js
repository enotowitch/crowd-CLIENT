import { useContext } from "react"
import { Context } from "../Context"

export default function useAlert() {

	const { popupElementSet, modalTextSet } = useContext(Context)

	function alert(text) {
		popupElementSet("Alert")
		modalTextSet(text)
	}

	function alertHide() {
		popupElementSet("")
		modalTextSet("")
	}

	return (
		{ alert, alertHide }
	)
}