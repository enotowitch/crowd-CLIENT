export default function parseForm(e) { // e=event from onSubmit (html form)

	let form = {} // {"any field 1": "@","any field 2": "123","any field 3": "abc"}

	// put all input values to "form"
	e.target.querySelectorAll("input, select").forEach(each => {
		form = { ...form, [each.name]: each.value }
	})

	return (
		{ form }
	)
}