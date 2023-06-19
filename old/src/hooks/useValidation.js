import useModal from "./useModal"


export default function useValidation() {

	const { alert, modalHide } = useModal()

	function validation(value, field) { // value=textEditor value/title/any string...

		let minLength = 3

		if (!value || value.length < minLength) {
			alert(`${field} must have atleast ${minLength} characters!`)
			throw new Error(`validation failed`)
		}

		modalHide()
	}

	return (
		{ validation }
	)
}