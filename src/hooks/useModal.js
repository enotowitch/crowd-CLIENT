import { useContext } from "react"
import { Context } from "../Context"

export default function useModal() {

	const { popupElementSet, modalTextSet } = useContext(Context)

	function alert(text) {
		popupElementSet("Alert")
		modalTextSet(text)
	}

	function modalHide() {
		popupElementSet("")
		modalTextSet("")
	}

	return (
		{ alert, modalHide }
	)
}