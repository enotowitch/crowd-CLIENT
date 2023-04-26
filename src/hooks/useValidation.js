import useAlert from "./useAlert"


export default function useValidation() {

	const { alert, alertHide } = useAlert()

	function validation(value, field) { // value=textEditor value/title/any string...

		let minLength = 3

		if (value.length < minLength) {
			alert(`${field} must have atleast ${minLength} characters!`)
			throw new Error(`validation failed`)
		}

		alertHide()
	}

	return (
		{ validation }
	)
}