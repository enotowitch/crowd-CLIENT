export default function clearForm(formClassName) {
	const form = document.querySelector(`.${formClassName}`)
	form.querySelectorAll("input, textarea").forEach(input => {
		input.value = ""
	})
}