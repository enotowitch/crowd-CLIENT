import useModal from "./useModal"
import parseImg from "../utils/parseImg"


export default function useValidation() {

	const { alert, modalHide } = useModal()

	function validation({ value, errorText, validate }) { // value=textEditor value/title/any string...

		if (validate === "textEditorImg" && !parseImg(value)) {
			alert(errorText)
			throw new Error(`validation failed`)
		}

		if (validate === "postImg" && !value) {
			alert(errorText)
			window.scrollTo(0, 0)
			throw new Error(`validation failed`)
		}

		if (validate === "textLength" && value.length < 3) {
			alert(errorText)
			throw new Error(`validation failed`)
		}

		modalHide()
	}

	return (
		{ validation }
	)
}